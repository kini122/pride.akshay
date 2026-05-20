import os
import re

files_to_fix = [
    'components/clients/partnership-tiers.tsx',
    'components/clients/industry-sectors.tsx',
    'components/clients/featured-clients-grid.tsx',
    'components/clients/client-success-stories.tsx'
]

for filepath in files_to_fix:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the dynamic opacity logic with just "animate-fade-in-up"
    content = re.sub(r'visibleTiers\.includes\([^)]+\)\s*\?\s*"animate-fade-in-up"\s*:\s*"opacity-0"', '"animate-fade-in-up"', content)
    content = re.sub(r'visibleIndustries\.includes\([^)]+\)\s*\?\s*"animate-fade-in-up"\s*:\s*"opacity-0"', '"animate-fade-in-up"', content)
    content = re.sub(r'visibleCards\.includes\([^)]+\)\s*\?\s*"animate-fade-in-up"\s*:\s*"opacity-0"', '"animate-fade-in-up"', content)
    content = re.sub(r'visibleStories\.includes\([^)]+\)\s*\?\s*"animate-fade-in-up"\s*:\s*"opacity-0"', '"animate-fade-in-up"', content)

    # Clean up the useState and useRef that were associated with these removed behaviors
    content = re.sub(r'const \[visibleTiers,\s*setVisibleTiers\]\s*=\s*useState<number\[\]>\(\[\]\)\n', '', content)
    content = re.sub(r'const \[visibleIndustries,\s*setVisibleIndustries\]\s*=\s*useState<number\[\]>\(\[\]\)\n', '', content)
    content = re.sub(r'const \[visibleCards,\s*setVisibleCards\]\s*=\s*useState<number\[\]>\(\[\]\)\n', '', content)
    content = re.sub(r'const \[visibleStories,\s*setVisibleStories\]\s*=\s*useState<number\[\]>\(\[\]\)\n', '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed visibility bugs in clients components!")
