import os
import re

files_to_fix = [
    r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge\components\services\service-template.tsx",
    r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge\components\about\values-section.tsx",
    r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge\components\about\timeline-section.tsx",
    r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge\components\about\team-section.tsx",
    r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge\components\about\process-section.tsx",
    r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge\components\about\expertise-section.tsx"
]

correct_observer = """const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {"""

for file_path in files_to_fix:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix the state variable
    content = content.replace("useState(false).fill(false))", "useState(false)")

    # Fix the garbage observer code
    content = re.sub(r'const observer = new IntersectionObserver\([\s\S]*?if \(sectionRef\.current\) \{', correct_observer, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {file_path}")
