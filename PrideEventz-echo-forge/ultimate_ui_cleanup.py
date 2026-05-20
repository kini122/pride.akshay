import os
import re

directories = ['components', 'app']

replacements = {
    # 1. Fix CSS Artifacts from Previous Run
    r'hover:shadow-none border border-border/\d+-xl': 'hover:border-primary/50',
    r'hover:shadow-none border border-border/\d+': 'hover:border-primary/50',
    r'shadow-none border border-border/\d+-none border border-border/\d+-xl': 'border border-border/50',
    r'shadow-none border border-border/\d+-none border border-border/\d+': 'border border-border/50',
    r'transition-transform duration-500 ease-out transition-transform duration-300': 'transition-transform duration-500 ease-out',
    r'transition-transform duration-500 ease-out transition-all duration-300': 'transition-all duration-500 ease-out',
    r'transition-transform duration-500 ease-out transition-transform duration-500': 'transition-transform duration-500 ease-out',
    r'transform hover:-translate-y-1 transition-transform duration-300 hover:-translate-y-1 transition-transform duration-300': 'hover:-translate-y-1 transition-transform duration-300',
    r'group-hover:scale-105 transition-transform duration-500 ease-out transition-transform duration-300': 'group-hover:scale-105 transition-transform duration-500 ease-out',
    r'group-hover:scale-105 transition-transform duration-500 ease-out transition-transform duration-500': 'group-hover:scale-105 transition-transform duration-500 ease-out',
    r'hover:-translate-y-1 transition-transform duration-300 transition-transform duration-300': 'hover:-translate-y-1 transition-transform duration-300',

    # 2. Fix Hero Gradients & Annoying Scroll Bounces
    r'bg-gradient-to-b from-orange-600/40 via-orange-500/30 to-transparent': 'bg-black/60',
    r'bg-gradient-to-b from-orange-400/20 via-transparent to-transparent': 'bg-black/40',
    r'animate-scroll-bounce': '',
    r'animate-bounce': '',
    r'animate-pulse': '',

    # 3. Elevate Shape Language to Stitch MVP (Crisp, Sharp, Luxury)
    # Convert remaining soft corners to sharp/subtle corners
    r'rounded-2xl': 'rounded-lg',
    r'rounded-3xl': 'rounded-lg',
    r'rounded-xl': 'rounded-md', # Cards become sharper
    r'rounded-lg': 'rounded-md', # Buttons become sharper

    # 4. Remove generic Badge/Pill shapes (unless it's an avatar/icon circle, which are usually explicitly w-10 h-10, etc.)
    # For generic rounded-full on buttons
    r'rounded-full(?=[^"]*px-[3-8])': 'rounded-md',
    r'rounded-full(?=[^"]*py-[2-4])': 'rounded-md',
    r'rounded-full(?=[^"]*hover:bg-background)': 'rounded-md', # Carousel controls

    # 5. Fix remaining typography & layouts
    r'text-5xl md:text-7xl': 'text-4xl md:text-6xl tracking-tighter',
    r'text-lg text-muted-foreground max-w-2xl mx-auto': 'text-lg text-muted-foreground max-w-2xl mx-auto tracking-wide',
}

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        for pattern, replacement in replacements.items():
            content = re.sub(pattern, replacement, content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned up UI in: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    for d in directories:
        for root, _, files in os.walk(d):
            for file in files:
                if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
                    process_file(os.path.join(root, file))
    print("Ultimate UI cleanup complete!")
