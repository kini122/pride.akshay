import os
import re

base_path = r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge"

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Replace hardcoded tailwind classes
    content = re.sub(r'\bpink-([1-9]00)\b', r'orange-\1', content)
    content = re.sub(r'\bred-([1-9]00)\b', r'orange-\1', content)
    content = re.sub(r'\brose-([1-9]00)\b', r'orange-\1', content)

    # In case there are bg-[#EF4444] or similar red hexes
    content = content.replace('bg-[#EF4444]', 'bg-orange-500')
    content = content.replace('text-[#EF4444]', 'text-orange-500')

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")

for root, dirs, files in os.walk(base_path):
    if 'node_modules' in root or '.git' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.html')):
            process_file(os.path.join(root, file))
