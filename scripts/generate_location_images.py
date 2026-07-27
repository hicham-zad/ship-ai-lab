from PIL import Image, ImageDraw, ImageFont
import math, os

W, H = 1200, 630
CORAL = (255, 88, 89)
CORAL_LIGHT = (255, 140, 140)
BLACK = (10, 10, 10)
GRAY  = (150, 150, 150)
LGRAY = (220, 220, 225)
WHITE = (255, 255, 255)

FONT_DIR = "/System/Library/Fonts/Supplemental/"
FONT_BLACK  = FONT_DIR + "Arial Black.ttf"
FONT_BOLD   = FONT_DIR + "Arial Bold.ttf"
FONT_REG    = FONT_DIR + "Arial.ttf"

OUT_DIR = "/Users/Apple/Desktop/ShipAI_Solutions/Code/sh-ai-sol/public/"

def draw_brushstroke(draw, x1, x2, y, thickness=20):
    """Draw a smooth solid brushstroke underline using overlapping circles."""
    steps = int((x2 - x1) / 2)
    for i in range(steps + 1):
        t = i / max(steps, 1)
        px = x1 + t * (x2 - x1)
        wave = math.sin(t * math.pi * 2.5) * 4
        py = y + wave
        # taper slightly at ends
        taper = math.sin(t * math.pi)
        w = max(6, int(thickness * (0.6 + 0.4 * taper)))
        draw.ellipse([px - w//2, py - w//3, px + w//2, py + w//3], fill=CORAL)


def draw_icon_phone(draw, cx, cy, size=60):
    """Simple flat phone icon."""
    pw, ph = int(size * 0.55), int(size * 0.9)
    x0, y0 = cx - pw//2, cy - ph//2
    x1, y1 = cx + pw//2, cy + ph//2
    r = 8
    draw.rounded_rectangle([x0, y0, x1, y1], radius=r, fill=CORAL, outline=BLACK, width=3)
    draw.rounded_rectangle([x0+3, y0+3, x1-3, y1-3], radius=r-2, fill=WHITE)
    # screen
    sw = pw - 14
    draw.rectangle([cx - sw//2, y0 + 10, cx + sw//2, y1 - 18], fill=(230, 230, 235))
    # home button dot
    draw.ellipse([cx - 5, y1 - 14, cx + 5, y1 - 4], fill=CORAL)


def draw_icon_rocket(draw, cx, cy, size=60):
    """Simple flat rocket icon."""
    # body
    body_pts = [(cx, cy - size//2), (cx + size//4, cy + size//6), (cx - size//4, cy + size//6)]
    draw.polygon(body_pts, fill=CORAL, outline=BLACK)
    # nose cone (triangle)
    # fins
    lfin = [(cx - size//4, cy + size//6), (cx - size//2.5, cy + size//2.5), (cx - size//6, cy + size//8)]
    rfin = [(cx + size//4, cy + size//6), (cx + size//2.5, cy + size//2.5), (cx + size//6, cy + size//8)]
    draw.polygon(lfin, fill=CORAL, outline=BLACK)
    draw.polygon(rfin, fill=CORAL, outline=BLACK)
    # window
    draw.ellipse([cx-8, cy-size//6, cx+8, cy+size//8], fill=WHITE, outline=BLACK, width=2)


def draw_icon_shield(draw, cx, cy, size=60):
    """Simple flat shield icon."""
    pts = [
        (cx, cy - size//2),
        (cx + size//2, cy - size//6),
        (cx + size//2, cy + size//6),
        (cx, cy + size//2),
        (cx - size//2, cy + size//6),
        (cx - size//2, cy - size//6),
    ]
    draw.polygon(pts, fill=CORAL, outline=BLACK, width=3)
    # inner cross
    draw.rectangle([cx - 4, cy - size//4, cx + 4, cy + size//4], fill=WHITE)
    draw.rectangle([cx - size//4, cy - 4, cx + size//4, cy + 4], fill=WHITE)


def draw_icon_brain(draw, cx, cy, size=60):
    """Simple lightbulb with brain-ish lines."""
    r = size // 2
    # bulb circle
    draw.ellipse([cx - r, cy - r, cx + r, cy + size//6], fill=CORAL, outline=BLACK, width=3)
    # base
    draw.rectangle([cx - r//2, cy + size//6, cx + r//2, cy + size//2], fill=(200, 200, 200), outline=BLACK, width=2)
    # lines inside
    draw.arc([cx - r + 8, cy - r + 8, cx + r - 8, cy + size//6 - 8], 200, 340, fill=WHITE, width=3)


def draw_icon_clipboard(draw, cx, cy, size=60):
    """Medical clipboard."""
    w, h = int(size * 0.7), int(size * 0.85)
    x0, y0 = cx - w//2, cy - h//2
    x1, y1 = cx + w//2, cy + h//2
    draw.rounded_rectangle([x0, y0, x1, y1], radius=6, fill=WHITE, outline=BLACK, width=3)
    # clip at top
    draw.rounded_rectangle([cx - w//4, y0 - 6, cx + w//4, y0 + 8], radius=4, fill=CORAL, outline=BLACK, width=2)
    # cross
    draw.rectangle([cx - 3, y0 + 18, cx + 3, y0 + 36], fill=CORAL)
    draw.rectangle([cx - 10, y0 + 24, cx + 10, y0 + 30], fill=CORAL)
    # lines
    for offset in [42, 54]:
        draw.rectangle([x0 + 10, y0 + offset, x1 - 10, y0 + offset + 4], fill=(180, 180, 180))


def draw_icon_laptop(draw, cx, cy, size=60):
    """Simple laptop."""
    sw, sh = int(size * 0.85), int(size * 0.55)
    sx0, sy0 = cx - sw//2, cy - sh//2
    sx1, sy1 = cx + sw//2, cy + sh//2
    # screen
    draw.rounded_rectangle([sx0, sy0, sx1, sy1], radius=5, fill=BLACK, outline=BLACK, width=3)
    draw.rectangle([sx0 + 4, sy0 + 4, sx1 - 4, sy1 - 4], fill=(40, 40, 50))
    # code lines on screen
    for i, col in enumerate([CORAL, WHITE, (120, 200, 120)]):
        draw.rectangle([sx0 + 8, sy0 + 8 + i * 9, sx0 + 8 + (30 - i*5), sy0 + 14 + i * 9], fill=col)
    # base
    bw = int(sw * 1.1)
    draw.rectangle([cx - bw//2, sy1, cx + bw//2, sy1 + 7], fill=(180, 180, 180), outline=BLACK, width=2)


def draw_icon_code(draw, cx, cy, size=60):
    """Code tag icon."""
    w, h = int(size * 0.85), int(size * 0.7)
    x0, y0 = cx - w//2, cy - h//2
    x1, y1 = cx + w//2, cy + h//2
    draw.rounded_rectangle([x0, y0, x1, y1], radius=8, fill=WHITE, outline=CORAL, width=4)
    # dots at top
    for i in range(3):
        draw.ellipse([x0 + 10 + i * 12, y0 + 8, x0 + 18 + i * 12, y0 + 16],
                     fill=[CORAL, (255, 180, 80), (80, 200, 120)][i])
    # </> text simulation
    try:
        fnt = ImageFont.truetype(FONT_BOLD, int(size * 0.3))
        draw.text((cx, cy + 4), "</>", fill=CORAL, font=fnt, anchor="mm")
    except:
        pass


def draw_icon_cloud(draw, cx, cy, size=60):
    """Cloud with gear."""
    r = size // 3
    draw.ellipse([cx - r, cy - r, cx + r, cy + r//2], fill=(220, 230, 250), outline=BLACK, width=3)
    draw.ellipse([cx - r//2 - r//2, cy - r//3, cx + r//2, cy + r//2 + 5], fill=(220, 230, 250), outline=BLACK, width=2)
    # gear circle
    gr = size // 5
    draw.ellipse([cx - gr, cy - gr, cx + gr, cy + gr], fill=CORAL, outline=BLACK, width=2)
    draw.ellipse([cx - gr//2, cy - gr//2, cx + gr//2, cy + gr//2], fill=WHITE)
    # gear teeth
    for angle in range(0, 360, 45):
        rad = math.radians(angle)
        tx = cx + int((gr + 5) * math.cos(rad))
        ty = cy + int((gr + 5) * math.sin(rad))
        draw.ellipse([tx - 4, ty - 4, tx + 4, ty + 4], fill=CORAL)


def draw_icon_building(draw, cx, cy, size=60):
    """City building."""
    bw, bh = int(size * 0.5), int(size * 0.75)
    x0, y0 = cx - bw//2, cy - bh//2
    x1, y1 = cx + bw//2, cy + bh//2
    draw.rectangle([x0, y0, x1, y1], fill=CORAL, outline=BLACK, width=3)
    # windows
    for row in range(3):
        for col in range(2):
            wx = x0 + 8 + col * (bw // 2 - 4)
            wy = y0 + 10 + row * 16
            draw.rectangle([wx, wy, wx + 10, wy + 10], fill=WHITE)
    # door
    dw = bw // 4
    draw.rectangle([cx - dw//2, y1 - 18, cx + dw//2, y1], fill=BLACK)


def draw_icon_coins(draw, cx, cy, size=60):
    """Coin stack."""
    cr = int(size * 0.3)
    for i in range(3):
        oy = i * 10
        draw.ellipse([cx - cr, cy - oy - 8, cx + cr, cy - oy + 8], fill=CORAL, outline=BLACK, width=2)
        draw.ellipse([cx - cr + 4, cy - oy - 5, cx + cr - 4, cy - oy + 5], fill=(255, 150, 50))


def make_image(city, supertitle, subtitle, out_filename):
    img = Image.new("RGB", (W, H), WHITE)
    draw = ImageDraw.Draw(img)

    PAD = 80

    # --- SUPERTITLE ---
    try:
        f_super = ImageFont.truetype(FONT_REG, 32)
    except:
        f_super = ImageFont.load_default()
    draw.text((W // 2, 62), supertitle, fill=GRAY, font=f_super, anchor="mm")

    # --- CITY NAME ---
    for font_size in range(240, 50, -4):
        try:
            f_city = ImageFont.truetype(FONT_BLACK, font_size)
        except:
            f_city = ImageFont.load_default()
        bbox = draw.textbbox((0, 0), city, font=f_city)
        tw = bbox[2] - bbox[0]
        if tw <= W - PAD * 2:
            break

    city_y = H // 2 - 40
    draw.text((W // 2, city_y), city, fill=BLACK, font=f_city, anchor="mm")

    # --- BRUSHSTROKE UNDERLINE ---
    bbox = draw.textbbox((W // 2, city_y), city, font=f_city, anchor="mm")
    ul_y = bbox[3] + 18
    draw_brushstroke(draw, bbox[0], bbox[2], ul_y, thickness=22)

    # --- SUBTITLE ---
    try:
        f_sub = ImageFont.truetype(FONT_BOLD, 38)
    except:
        f_sub = ImageFont.load_default()
    sub_y = ul_y + 56
    draw.text((W // 2, sub_y), subtitle, fill=BLACK, font=f_sub, anchor="mm")

    # --- BRAND at bottom ---
    try:
        f_brand = ImageFont.truetype(FONT_BOLD, 30)
    except:
        f_brand = ImageFont.load_default()

    brand_y = H - 52
    part1, part2 = "Ship", "AI Lab"
    bb1 = draw.textbbox((0, 0), part1, font=f_brand)
    bb2 = draw.textbbox((0, 0), part2, font=f_brand)
    dot_r = 5
    total_w = (bb1[2] - bb1[0]) + dot_r * 2 + 10 + (bb2[2] - bb2[0])
    x_start = W // 2 - total_w // 2

    draw.text((x_start, brand_y), part1, fill=BLACK, font=f_brand, anchor="lm")
    dot_x = x_start + (bb1[2] - bb1[0]) + dot_r + 4
    draw.ellipse([dot_x - dot_r, brand_y - dot_r, dot_x + dot_r, brand_y + dot_r], fill=CORAL)
    draw.text((dot_x + dot_r + 4, brand_y), part2, fill=BLACK, font=f_brand, anchor="lm")

    out_path = os.path.join(OUT_DIR, out_filename)
    img.save(out_path, "PNG", optimize=True)
    print(f"✓ {out_filename}  {img.size}")


# Generate all 5
make_image("Lagos",        "AI MVP Agency in", "West Africa  ·  Fintech & Mobile",          "location-lagos.png")
make_image("Tel Aviv",     "AI MVP Agency in", "Startup Nation  ·  Enterprise AI",           "location-tel-aviv.png")
make_image("Philadelphia", "AI MVP Agency in", "East Coast  ·  Healthcare AI",               "location-philadelphia.png")
make_image("Bangalore",    "AI MVP Agency in", "India's Silicon Valley  ·  SaaS AI",         "location-bangalore.png")
make_image("Kuwait City",  "AI MVP Agency in", "GCC  ·  Enterprise & Fintech AI",            "location-kuwait-city.png")

