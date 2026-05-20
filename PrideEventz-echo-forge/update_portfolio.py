import re

filepath = 'components/portfolio/portfolio-grid.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace category: "shows" with "concerts"
content = content.replace('category: "shows"', 'category: "concerts"')

# Replace category: "branding" with "brand-activation"
content = content.replace('category: "branding"', 'category: "brand-activation"')

# Replace category: "events" with "rural-marketing"
content = content.replace('category: "events"', 'category: "rural-marketing"')

# Specifically replace corporate to mice for conference items
content = re.sub(r'(title: "Conference Room Setup",\s+category: )"corporate"', r'\1"mice"', content)
content = re.sub(r'(title: "HP x Microsoft Future Is Here Conference",\s+category: )"corporate"', r'\1"mice"', content)
content = re.sub(r'(title: "Carestream Partner Conference Welcome Stage",\s+category: )"corporate"', r'\1"mice"', content)
content = re.sub(r'(title: "Boardroom Seminar Setup",\s+category: )"corporate"', r'\1"mice"', content)
content = re.sub(r'(title: "LEAP 2025 Ballroom Conference",\s+category: )"corporate"', r'\1"mice"', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated portfolio-grid.tsx categories successfully!')
