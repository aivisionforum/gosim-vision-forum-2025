import base64
import sys
from PIL import Image
from io import BytesIO

# This will be replaced with actual image data
image_data = """[PLACEHOLDER_FOR_IMAGE_DATA]"""

# Decode base64 and save as JPEG
try:
    # Remove data URL prefix if present
    if image_data.startswith('data:'):
        image_data = image_data.split(',')[1]
    
    # Decode base64
    img_bytes = base64.b64decode(image_data)
    
    # Open image with PIL
    img = Image.open(BytesIO(img_bytes))
    
    # Convert to RGB if necessary (in case of RGBA)
    if img.mode in ('RGBA', 'LA'):
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
        img = background
    elif img.mode not in ('RGB', 'L'):
        img = img.convert('RGB')
    
    # Save as JPEG with high quality
    img.save('src/assets/speakers/liu-qunkai.jpg', 'JPEG', quality=95, optimize=True)
    print("Image saved successfully")
    
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)