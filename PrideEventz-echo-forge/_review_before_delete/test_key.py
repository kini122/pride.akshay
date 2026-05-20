import os
import re

base_path = r"c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge"

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # super naive check to see if there's map but no key anywhere nearby
    # actually let's just use grep
    pass

