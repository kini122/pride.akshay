import re

file_path = r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge\app\globals.css"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any oklch(L C 30) with oklch(L C 45) to shift hue from red to orange
content = re.sub(r'oklch\(([\d.]+)\s+([\d.]+)\s+30\)', r'oklch(\1 \2 45)', content)

# Check for destructive as well if it's the 27.325 one (which is red)
content = content.replace('27.325', '45')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated globals.css hue to 45 (orange)")
