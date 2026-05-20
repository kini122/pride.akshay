import os
import glob
import re

for filepath in glob.glob('components/**/*.tsx', recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the isVisible ternary with animate-fade-in-up
    # Matches: isVisible ? "opacity-100 ..." : "opacity-0 ..."
    new_content = re.sub(r'isVisible\s*\?\s*"[^"]*"\s*:\s*"[^"]*opacity-0[^"]*"', '"animate-fade-in-up"', content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filepath}')
