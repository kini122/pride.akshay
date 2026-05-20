import os
import re

base_path = r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge\components"

def fix_intersection_observer(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Check if there is an observer pattern with setTimeout and setVisibleSomething
    if 'setTimeout(() => {' in content and 'IntersectionObserver' in content and 'setVisible' in content:
        # replace state definition: const [visibleSteps, setVisibleSteps] = useState<boolean[]>([...]) => const [isVisible, setIsVisible] = useState(false)
        content = re.sub(r'const\s+\[(visible[A-Za-z0-9_]*),\s+(setVisible[A-Za-z0-9_]*)\]\s*=\s*useState<boolean\[\]>\([^)]*\)', r'const [isVisible, setIsVisible] = useState(false)', content)
        
        # replace observer logic
        new_observer = """const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )"""
        content = re.sub(r'const\s+observer\s*=\s*new\s+IntersectionObserver\(\s*\(entries\)\s*=>\s*\{.*?(?:},\s*\{\s*threshold:[^}]*\}\s*,?\s*|\})\s*\)', new_observer, content, flags=re.DOTALL)
        
        # replace visibility check
        # usually `visibleSomething[index] ? "..." : "..."`
        # wait, the name visibleSomething changes. Let's find it.
        # we can just blindly replace `visible\w*\[index\]` with `isVisible`
        content = re.sub(r'visible[A-Za-z0-9_]*\[index\]\s*\?', r'isVisible ?', content)
        
        # find the element that has this transition class, and add style={{ transitionDelay: `${index * 150}ms` }} or animationDelay
        # This is tough for a regex because we don't know exactly where to put it. 
        # But we can replace:
        # className={`... ${isVisible ? ... : ...}`}
        # >
        # with:
        # className={`... ${isVisible ? ... : ...}`} style={{ transitionDelay: `${index * 150}ms` }}>
        content = re.sub(r'(isVisible\s*\?\s*"[^"]+"\s*:\s*"[^"]+"\s*\n?\s*\}\s*[`' + "']" + r')\s*\n?(\s*)>', r'\1 style={{ transitionDelay: `${index * 150}ms` }}>', content)
        content = re.sub(r'(isVisible\s*\?\s*\'[^\']+\'\s*:\s*\'[^\']+\'\s*\n?\s*\}\s*[`' + "']" + r')\s*\n?(\s*)>', r'\1 style={{ transitionDelay: `${index * 150}ms` }}>', content)

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {file_path}")

for root, dirs, files in os.walk(base_path):
    for file in files:
        if file.endswith('.tsx'):
            fix_intersection_observer(os.path.join(root, file))

