# Product Requirements Document (PRD)
## Askkart Website Redesign - Homepage & Product Page

---

## Executive Summary

This PRD outlines the complete redesign of Askkart's homepage and product page, taking design inspiration from Childrensalon.com while maintaining Askkart's existing content. The goal is to create a luxury, elegant, and modern e-commerce experience using Next.js 15, Shadcn UI components, and Tailwind CSS.

---

## Table of Contents
1. [Research Summary](#research-summary)
2. [Design System Extraction](#design-system-extraction)
3. [Content Analysis](#content-analysis)
4. [Homepage Specifications](#homepage-specifications)
5. [Product Page Specifications](#product-page-specifications)
6. [Component Mapping](#component-mapping)
7. [Technical Implementation](#technical-implementation)

---

## 1. Research Summary

### Research Conducted
- **Total Web Searches**: 10 queries
- **URLs Analyzed**: 50+ sources
- **Sites Analyzed**: 2 (Askkart.co.in, Childrensalon.com)

### Key Research Areas
1. Luxury e-commerce design systems and patterns
2. Shadcn UI components for e-commerce
3. Childrensalon design analysis
4. Next.js homepage and hero section best practices
5. Product page design best practices 2024
6. Carousel/slider implementation with Shadcn
7. Navigation header/footer patterns
8. Product card grid layouts
9. Image gallery and zoom implementations
10. Typography and color systems for luxury retail

### Key Findings
- **Childrensalon Success Factors**:
  - Clean, minimal design with generous white space
  - High-quality product imagery as primary focus
  - Clear visual hierarchy with elegant typography
  - Sophisticated color palette (neutrals, pastels, accent colors)
  - Intuitive navigation with clear category structure
  - Trust indicators (rewards program, customer reviews)
  - Mobile-first responsive design

---

## 2. Design System Extraction

### 2.1 Color Palette (from Childrensalon)

#### Primary Colors
```css
--primary-white: #FFFFFF (backgrounds)
--primary-black: #1A1A1A (text, headers)
--soft-gray: #F5F5F5 (section backgrounds)
--medium-gray: #666666 (secondary text)
--light-gray: #E5E5E5 (borders, dividers)
```

#### Accent Colors
```css
--accent-navy: #2B3A52 (CTAs, links)
--accent-sage: #C8D5C2 (highlights, badges)
--accent-blush: #F4E6E2 (promotional banners)
--accent-mint: #D4E9E7 (seasonal sections)
--accent-warm: #E8D9CF (category cards)
```

#### Semantic Colors
```css
--success: #4A7C59 (in stock, success messages)
--warning: #D4A574 (low stock warnings)
--error: #C65D5D (out of stock, errors)
--info: #6B9BC3 (informational messages)
```

### 2.2 Typography

#### Font Families
```css
Primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Headings: 'Playfair Display', serif (elegant, luxury feel)
Body: 'Inter', 'Helvetica Neue', sans-serif (readable, modern)
Accents: 'Montserrat', sans-serif (navigation, buttons)
```

#### Type Scale
```css
H1 (Hero): 48px / 64px (mobile / desktop), font-weight: 600, letter-spacing: -0.02em
H2 (Section): 36px / 48px, font-weight: 600, letter-spacing: -0.01em
H3 (Subsection): 24px / 32px, font-weight: 600
H4 (Card Title): 18px / 20px, font-weight: 500
Body Large: 16px / 18px, font-weight: 400, line-height: 1.6
Body Regular: 14px / 16px, font-weight: 400, line-height: 1.5
Body Small: 12px / 14px, font-weight: 400, line-height: 1.4
Button Text: 14px / 16px, font-weight: 500, letter-spacing: 0.02em
```

### 2.3 Spacing System

#### Base Unit: 4px

```css
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
5xl: 128px
```

#### Container Widths
```css
max-width-xs: 640px
max-width-sm: 768px
max-width-md: 1024px
max-width-lg: 1280px
max-width-xl: 1440px
max-width-2xl: 1600px
```

#### Section Padding
```css
Mobile: padding-y: 48px, padding-x: 16px
Tablet: padding-y: 64px, padding-x: 32px
Desktop: padding-y: 96px, padding-x: 48px
```

### 2.4 Component Styles

#### Buttons
```css
Primary:
  - Background: #2B3A52
  - Text: #FFFFFF
  - Padding: 12px 32px
  - Border-radius: 4px
  - Hover: opacity 90%, subtle shadow
  - Font-weight: 500
  - Letter-spacing: 0.5px
  - Transition: all 0.3s ease

Secondary:
  - Background: transparent
  - Text: #2B3A52
  - Border: 1px solid #2B3A52
  - Padding: 12px 32px
  - Border-radius: 4px
  - Hover: background #2B3A52, text white
```

#### Cards
```css
Product Card:
  - Background: #FFFFFF
  - Border: none or 1px solid #E5E5E5
  - Border-radius: 8px
  - Shadow: 0 2px 8px rgba(0,0,0,0.08) on hover
  - Padding: 0 (image full bleed)
  - Content padding: 16px
  - Transition: transform 0.3s, shadow 0.3s
  - Hover: transform translateY(-4px)
```

#### Images
```css
Aspect Ratios:
  - Product: 3:4 (portrait)
  - Category Banner: 16:9 (landscape)
  - Hero: 21:9 (ultra-wide)
  
Image Treatment:
  - Border-radius: 4px (subtle)
  - Hover: scale(1.05)
  - Transition: transform 0.4s ease
  - Object-fit: cover
```

### 2.5 Layout Patterns

#### Grid System
```css
Product Grid:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 4 columns
  - Gap: 24px (mobile), 32px (desktop)

Category Grid:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns
  - Gap: 16px (mobile), 24px (desktop)
```

#### Navigation
```css
Header Height: 80px (desktop), 64px (mobile)
Sticky Header: Yes, with shadow on scroll
Z-index: 1000

Navigation Items:
  - Font-size: 14px
  - Letter-spacing: 1px
  - Text-transform: uppercase
  - Padding: 8px 16px
  - Hover: underline with 0.3s transition
```

---

## 3. Content Analysis

### 3.1 Current Askkart Content

#### Brand Information
- **Name**: Askkart - by Om Suraj Collection
- **Tagline**: "Shop online for the finest baby essentials and fashion, offering comfort, style, and convenience delivered at home"
- **Focus**: Babies products and fashion

#### Product Categories
1. **NewBorn**
   - Description: "Best Choice for Your NewBorn"
   - Target: 0-12 months

2. **Kids**
   - Description: "Discover Askkart's Collection!"
   - Target: 1-10 years

3. **Toys**
   - Description: "New Arrivals Toys"
   - Target: All ages

#### Product Inventory (Sample from Site)

**Boys Clothing:**
1. Stylish Three Piece Suit for Boys - Formal Kids Outfit (₹1,895.00)
2. Stylish 3-Piece Boys Suit Set - Elegant Kids Formal Wear (₹2,045.00)
3. Boys Stylish Waistcoat Bow Tie Party Wear Set (₹2,195.00)
4. Boys Casual Jacket Set - Trendy 3-Piece Outfit (₹1,895.00)
5. Stylish Jacket Set for Boys (₹1,985.00–₹2,295.00)

**Toys:**
1. Soft Plush Multicolor Ball for Kids (₹395.00)
2. Classic Yellow Pooh Plush Toy for Kids (₹395.00)
3. Adorable Pink Bunny Plush Toy for Kids (₹425.00)

#### Unique Selling Points
- Curated collection
- Comfort, style, and softness in clothes
- Quality baby essentials
- Convenient home delivery
- Season special collections

#### Customer Testimonial (from site)
> "Finding a place that caters to the diverse needs of a family can be a challenge, but this all-in-one shop is a true gem in our community. It's a haven for parents looking for quality kids' essentials..."
> - Sharad Cholera

#### Contact Information
- Address: (To be added from actual business)
- Email: contact@askkart.com (placeholder)
- Phone: (To be added)

---

## 4. Homepage Specifications

### 4.1 Page Structure

```
┌─────────────────────────────────────────┐
│           HEADER / NAVIGATION           │
├─────────────────────────────────────────┤
│           HERO SECTION                  │
├─────────────────────────────────────────┤
│      PROMOTIONAL BANNER (Optional)      │
├─────────────────────────────────────────┤
│         CATEGORY SHOWCASE               │
├─────────────────────────────────────────┤
│         NEW ARRIVALS SECTION            │
├─────────────────────────────────────────┤
│      FEATURED COLLECTION BANNER         │
├─────────────────────────────────────────┤
│         BEST SELLERS SECTION            │
├─────────────────────────────────────────┤
│       WHY CHOOSE US / USP SECTION       │
├─────────────────────────────────────────┤
│       TESTIMONIALS SECTION              │
├─────────────────────────────────────────┤
│       NEWSLETTER SIGNUP                 │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
```

### 4.2 Section-by-Section Specifications

---

#### 4.2.1 HEADER / NAVIGATION

**Layout:**
```
Mobile: Hamburger menu + Logo (center) + Cart icon
Desktop: Full navigation
```

**Desktop Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  🔍 Search    [LOGO: ask kart]    👤 Account  🛒 Cart   │
├──────────────────────────────────────────────────────────┤
│    HOME  |  SHOP  |  NEW ARRIVALS  |  CATEGORIES  |  CONTACT  │
└──────────────────────────────────────────────────────────┘
```

**Components:**
- **Logo**: Center-aligned, serif font (Playfair Display), size 32px
- **Primary Nav**: 
  - Items: Home, Shop, New Arrivals, Categories (dropdown), Contact
  - Font: 14px, uppercase, letter-spacing 1px
  - Hover: underline animation
- **Utility Nav**:
  - Search icon with expandable search bar
  - Account/User icon
  - Shopping cart with badge showing item count
- **Sticky Behavior**: Header sticks to top on scroll with subtle shadow

**Shadcn Components:**
- `NavigationMenu` for main nav
- `Sheet` for mobile hamburger menu
- `Input` with `Search` icon for search
- `Button` (ghost variant) for icons
- `Badge` for cart count

**Responsive Behavior:**
- Mobile: Hamburger menu (Sheet), logo center, cart right
- Tablet: Same as mobile
- Desktop: Full horizontal navigation

---

#### 4.2.2 HERO SECTION

**Design Concept:**
Full-width hero with high-quality lifestyle image, text overlay, and CTA

**Layout:**
```
┌────────────────────────────────────────────────┐
│                                                │
│    [Background: Large lifestyle image]        │
│                                                │
│         It's Snuggle Season                   │
│                                                │
│    As the nights draw in, our cosiest        │
│    collections come out to play.             │
│                                                │
│              [Shop Now Button]                │
│                                                │
└────────────────────────────────────────────────┘
```

**Specifications:**
- **Height**: 60vh (mobile), 70vh (desktop)
- **Background**: 
  - High-quality image relevant to season/promotion
  - Subtle gradient overlay (rgba(0,0,0,0.2))
- **Content Position**: Center or left-aligned
- **Typography**:
  - Headline: 48px (mobile), 72px (desktop), white, Playfair Display
  - Subheading: 18px (mobile), 24px (desktop), white, Inter
- **CTA Button**:
  - "Shop Now" or "Discover Collection"
  - White background with dark text OR dark background with white text
  - Size: large (16px text, 16px 40px padding)
  - Border-radius: 4px

**Shadcn Components:**
- `Button` (primary variant, large size)
- Custom section with Next.js `Image` component

**Content (Askkart-specific):**
- Headline: "Discover Askkart's Collection"
- Subheading: "Shop online for the finest baby essentials and fashion, offering comfort, style, and convenience delivered at home"
- CTA: "Shop Now"

---

#### 4.2.3 PROMOTIONAL BANNER (Optional)

**Design:**
```
┌─────────────────────────────────────────────────────────┐
│  ✨ Childrensalon Rewards - Collect double Points      │
│     when you shop our New In collection                │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Height**: 48px (mobile), 56px (desktop)
- **Background**: Accent color (sage green or blush pink)
- **Text**: 14px, center-aligned, white or dark text depending on background
- **Close button**: X icon on right
- **Animation**: Slide down on page load

**Shadcn Components:**
- `Alert` with custom styling
- `Button` (ghost) for close icon

**Content (Askkart-specific):**
- "Season Special - New Collection for babies. Grab them Now!"

---

#### 4.2.4 CATEGORY SHOWCASE

**Design:**
Grid of category cards with images and labels

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              Shop by Category                       │
│                                                      │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────┐
│   │  BABY    │  │  GIRL    │  │   BOY    │  │SHOES│
│   │  [img]   │  │  [img]   │  │  [img]   │  │[img]│
│   │          │  │          │  │          │  │     │
│   │Shop Baby │  │Shop Girl │  │Shop Boy  │  │Shop │
│   └──────────┘  └──────────┘  └──────────┘  └─────┘
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specifications:**
- **Section Padding**: 64px (mobile), 96px (desktop)
- **Section Title**: 36px (mobile), 48px (desktop), center-aligned, Playfair Display
- **Grid**:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 4 columns
  - Gap: 16px (mobile), 24px (desktop)
- **Category Cards**:
  - Aspect ratio: 3:4 (portrait)
  - Image: Full bleed with subtle rounded corners (8px)
  - Overlay: Dark gradient at bottom for text readability
  - Text: Category name + "Shop [Category]" link
  - Hover: Image scale 1.05, show arrow icon
  - Transition: 0.3s ease

**Shadcn Components:**
- `Card` for category cards
- `Button` (link variant) for "Shop [Category]"

**Content (Askkart-specific):**
Categories:
1. **NewBorn** - "Best Choice for Your NewBorn"
2. **Kids** - "Discover Askkart's Collection"
3. **Toys** - "New Arrivals Toys"

---

#### 4.2.5 NEW ARRIVALS SECTION

**Design:**
Scrollable carousel or grid of product cards

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│           Their new favourite outfit awaits...      │
│                                                      │
│  ◀  [Product 1] [Product 2] [Product 3] [Product 4] ▶
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specifications:**
- **Section Background**: Soft gray (#F5F5F5) or accent color
- **Section Padding**: 64px (mobile), 96px (desktop)
- **Section Title**: 36px (mobile), 48px (desktop), center-aligned
- **Subtitle**: 16px, center-aligned, medium gray
- **Layout**:
  - Mobile: Carousel with 1 item visible
  - Tablet: Grid 2 columns or carousel with 2 visible
  - Desktop: Carousel with 4 items visible (with arrows)
- **Product Cards**: (See Product Card specifications below)
- **Navigation**: Previous/Next arrows, or scroll dots
- **Auto-play**: Optional, 5-second interval

**Shadcn Components:**
- `Carousel` (embla-carousel-react)
- `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious`
- Product cards (custom component)

**Product Card Specifications:**
```
┌────────────────┐
│                │
│     [Image]    │
│                │
├────────────────┤
│  Brand Name    │
│  Product Name  │
│  $150          │
└────────────────┘
```
- **Card Size**: Full width with 16:9 or 3:4 aspect ratio for image
- **Image**: High-quality, white or neutral background
- **Content Padding**: 16px
- **Brand/Category**: 12px, uppercase, light gray
- **Product Name**: 16px, regular weight, dark gray
- **Price**: 16px, medium weight, dark gray
- **Hover**: 
  - Image: slight zoom (scale 1.05)
  - Card: subtle shadow and lift (translateY -4px)
  - Show "Quick View" button overlay on image

**Content (Askkart-specific):**
Display latest products from inventory:
- Stylish Three Piece Suit for Boys (₹1,895)
- Stylish 3-Piece Boys Suit Set (₹2,045)
- Boys Stylish Waistcoat Set (₹2,195)
- Boys Casual Jacket Set (₹1,895)
- Stylish Jacket Set for Boys (₹1,985-₹2,295)

---

#### 4.2.6 FEATURED COLLECTION BANNER

**Design:**
Split layout with image and content

**Layout:**
```
Desktop:
┌──────────────────────────────────────────┐
│              │                           │
│              │   Season Special          │
│   [Image]    │                           │
│              │   New Collection for      │
│              │   babies. Grab Now!       │
│              │                           │
│              │   [Shop Collection]       │
└──────────────────────────────────────────┘

Mobile: Stacked (Image on top, content below)
```

**Specifications:**
- **Background**: Accent color (blush pink or mint green)
- **Layout**: 50/50 split (desktop), stacked (mobile)
- **Image**: High-quality lifestyle image
- **Content Padding**: 48px (mobile), 64px (desktop)
- **Title**: 32px (mobile), 42px (desktop), Playfair Display
- **Description**: 16px, line-height 1.6
- **CTA Button**: Secondary style

**Shadcn Components:**
- Custom section layout
- `Button` (secondary variant)

**Content (Askkart-specific):**
- Title: "Season Special - New Collection for babies"
- Description: "Discover Askkart's Collection! New Stylish highlighting babies comfort, style, and softness in clothes."
- CTA: "Shop Collection"

---

#### 4.2.7 BEST SELLERS SECTION

**Design:**
Similar to New Arrivals but with "Best Seller" badges

**Layout:**
Same as New Arrivals section

**Specifications:**
- Same as New Arrivals
- **Addition**: "Best Seller" badge on product cards
  - Badge: Small label, accent color background, white text
  - Position: Top-left corner of image
  - Size: 12px, padding 4px 8px

**Shadcn Components:**
- Same as New Arrivals
- `Badge` for "Best Seller" indicator

**Content (Askkart-specific):**
Display best-selling products:
- Soft Plush Multicolor Ball (₹395)
- Classic Yellow Pooh Plush Toy (₹395)
- Adorable Pink Bunny Plush Toy (₹425)
- Top-selling clothing items

---

#### 4.2.8 WHY CHOOSE US / USP SECTION

**Design:**
Grid of USP cards with icons

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              Why Shop with Askkart?                 │
│                                                      │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│   │   🚚     │  │   ⭐      │  │   💝     │        │
│   │Fast Ship │  │  Quality  │  │Curated  │        │
│   │ping      │  │Products   │  │Selection│        │
│   └──────────┘  └──────────┘  └──────────┘        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specifications:**
- **Section Padding**: 64px (mobile), 96px (desktop)
- **Section Title**: 36px (mobile), 48px (desktop), center-aligned
- **Grid**:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 or 4 columns
  - Gap: 24px
- **USP Cards**:
  - Icon: 48px, accent color
  - Title: 20px, medium weight
  - Description: 14px, light gray
  - Padding: 32px
  - Background: white or very light gray
  - Border: 1px solid light gray OR shadow

**Shadcn Components:**
- `Card`, `CardHeader`, `CardContent`
- Icons from `lucide-react`

**Content (Askkart-specific):**
1. **Free Shipping**
   - Icon: Truck
   - Title: "Free Delivery"
   - Description: "On orders over ₹1,000"

2. **Quality Products**
   - Icon: Star / Award
   - Title: "Premium Quality"
   - Description: "Finest baby essentials and fashion"

3. **Curated Selection**
   - Icon: Gift / Heart
   - Title: "Curated Collection"
   - Description: "Carefully selected for comfort and style"

4. **Easy Returns**
   - Icon: RotateCcw
   - Title: "Easy Returns"
   - Description: "Hassle-free returns within 7 days"

---

#### 4.2.9 TESTIMONIALS SECTION

**Design:**
Carousel or grid of customer testimonials

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              What Our Customers Say                 │
│                                                      │
│   ◀  ┌──────────────────────────────┐  ▶          │
│      │  ⭐⭐⭐⭐⭐                       │             │
│      │                              │             │
│      │  "Finding a place that       │             │
│      │  caters to diverse needs..." │             │
│      │                              │             │
│      │  - Sharad Cholera           │             │
│      └──────────────────────────────┘             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specifications:**
- **Section Background**: White or soft gray
- **Section Padding**: 64px (mobile), 96px (desktop)
- **Section Title**: 36px (mobile), 48px (desktop), center-aligned
- **Layout**: Carousel (mobile/tablet) or 3-column grid (desktop)
- **Testimonial Cards**:
  - Background: White
  - Border: 1px solid light gray OR subtle shadow
  - Padding: 32px
  - Border-radius: 8px
  - Stars: 5 stars (yellow), 16px
  - Quote: 16px, italic, dark gray
  - Author: 14px, medium weight, medium gray
  - Spacing: 16px between elements

**Shadcn Components:**
- `Carousel` for mobile/tablet
- `Card` for testimonial cards
- Star icons from `lucide-react`

**Content (Askkart-specific):**
Testimonial from site:
> "Finding a place that caters to the diverse needs of a family can be a challenge, but this all-in-one shop is a true gem in our community. It's a haven for parents looking for quality kids' essentials, a paradise for those in search of comfortable hosiery, and a delight for foodies eager to explore authentic flavors."
> - Sharad Cholera

---

#### 4.2.10 NEWSLETTER SIGNUP

**Design:**
Simple centered form with email input and button

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              Don't Miss Out!                        │
│                                                      │
│    Get the latest on sales, special offers,         │
│    new releases and more...                         │
│                                                      │
│    [  Enter your email address  ] [Subscribe]      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specifications:**
- **Section Background**: Accent color (sage green or navy)
- **Section Padding**: 64px (mobile), 80px (desktop)
- **Content**: Center-aligned
- **Title**: 32px (mobile), 42px (desktop), white, Playfair Display
- **Description**: 16px, white, opacity 90%
- **Form Layout**:
  - Mobile: Stacked (input full width, button below)
  - Desktop: Inline (input + button side by side)
- **Input**:
  - Background: White
  - Padding: 12px 16px
  - Border-radius: 4px 0 0 4px (desktop), 4px (mobile)
  - Placeholder: "Enter your email address"
- **Button**:
  - Background: Dark (primary color)
  - Text: White
  - Padding: 12px 32px
  - Border-radius: 0 4px 4px 0 (desktop), 4px (mobile)
  - Text: "Subscribe"

**Shadcn Components:**
- `Input` for email field
- `Button` (primary variant)
- `Form` with validation

**Content (Askkart-specific):**
- Title: "Don't Miss Out!"
- Description: "Get the latest on sales, special offer, new releases and more…"
- CTA: "Subscribe"

---

#### 4.2.11 FOOTER

**Design:**
Multi-column footer with links, social icons, and copyright

**Layout:**
```
Desktop:
┌──────────────────────────────────────────────────────┐
│  [LOGO]              Customer Service    Categories  │
│  123 Fashion Ave     • Shop              • Kids      │
│  Suite 101           • My Account        • Girls     │
│  Address             • About             • Boys      │
│  email@email.com     • Contact           • Newborn   │
│  +1 234 567 890                                      │
│                      Our Company                     │
│                      • Privacy Policy                │
│                      • Terms & Conditions            │
│                      • Careers                       │
├──────────────────────────────────────────────────────┤
│  © 2024 Askkart. All rights reserved.               │
│                              [Social Icons: F I T P] │
└──────────────────────────────────────────────────────┘

Mobile: Stacked columns
```

**Specifications:**
- **Background**: Dark gray or white with light border-top
- **Text Color**: Medium gray (if white bg) or white (if dark bg)
- **Padding**: 48px (mobile), 64px (desktop)
- **Grid**:
  - Mobile: 1 column (stacked)
  - Tablet: 2 columns
  - Desktop: 4 columns
  - Gap: 32px
- **Column Headings**: 16px, medium weight, uppercase, letter-spacing 1px
- **Links**: 14px, regular weight, hover underline
- **Social Icons**: 20px, hover color change
- **Copyright**: 14px, border-top, padding-top 24px

**Shadcn Components:**
- Custom footer layout
- Icons from `lucide-react` (Facebook, Instagram, Twitter, Pinterest)
- `Separator` for divider line

**Content (Askkart-specific):**
- **Column 1**: Logo, address, contact info
- **Column 2**: Customer Service links (Shop, My Account, About, Contact)
- **Column 3**: Categories (Kids, Girls, Boys, Newborn, Toys)
- **Column 4**: Company info (Privacy Policy, Terms & Conditions, Careers)
- **Social**: Facebook, Instagram, Twitter, Pinterest
- **Copyright**: "© 2024 Askkart. All rights reserved."

---

## 5. Product Page Specifications

### 5.1 Page Structure

```
┌─────────────────────────────────────────┐
│           HEADER / NAVIGATION           │
├─────────────────────────────────────────┤
│            BREADCRUMB                   │
├─────────────────────────────────────────┤
│       PRODUCT DETAILS SECTION           │
│  ┌──────────────┬──────────────────┐   │
│  │              │                  │   │
│  │   IMAGE      │   PRODUCT INFO   │   │
│  │   GALLERY    │   • Title        │   │
│  │              │   • Price        │   │
│  │              │   • Desc         │   │
│  │              │   • Variants     │   │
│  │              │   • Add to Cart  │   │
│  └──────────────┴──────────────────┘   │
├─────────────────────────────────────────┤
│         PRODUCT DESCRIPTION TAB         │
├─────────────────────────────────────────┤
│       YOU MAY ALSO LIKE SECTION         │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
```

### 5.2 Section-by-Section Specifications

---

#### 5.2.1 BREADCRUMB

**Layout:**
```
Home > Shop > Boys Clothing > Three Piece Suit
```

**Specifications:**
- **Padding**: 16px (mobile), 24px (desktop)
- **Font**: 14px, regular weight
- **Color**: Medium gray
- **Links**: Hover underline
- **Separator**: "/" or ">" icon
- **Current Page**: Bold, darker color

**Shadcn Components:**
- `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator`

---

#### 5.2.2 PRODUCT DETAILS SECTION

**Layout (Desktop):**
```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────────────┐  ┌──────────────────────────┐   │
│  │                  │  │  Boys Clothing           │   │
│  │   [Main Image]   │  │  Stylish Three Piece     │   │
│  │                  │  │  Suit for Boys           │   │
│  │                  │  │                          │   │
│  │                  │  │  ₹1,895.00               │   │
│  ├──────────────────┤  │  ⭐⭐⭐⭐⭐ (0 reviews)     │   │
│  │ [Thumb] [Thumb]  │  │                          │   │
│  │ [Thumb] [Thumb]  │  │  Elegant formal outfit...│   │
│  └──────────────────┘  │                          │   │
│                        │  Size: ⚪ S ⚪ M ⚪ L     │   │
│                        │  Color: 🔴 🔵 ⚫         │   │
│                        │                          │   │
│                        │  Quantity: [-] 1 [+]     │   │
│                        │                          │   │
│                        │  [Add to Cart]           │   │
│                        │  [Add to Wishlist]       │   │
│                        │                          │   │
│                        │  • Free shipping >₹1000  │   │
│                        │  • Easy returns          │   │
│                        │  • In stock              │   │
│                        └──────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Layout (Mobile):**
Stacked: Image gallery on top, product info below

**Image Gallery Specifications:**
- **Layout**: 
  - Desktop: Main image (left 60%), thumbnails (vertical strip left side)
  - Mobile: Full-width carousel with dots
- **Main Image**: 
  - Aspect ratio: 3:4
  - Background: White or very light gray
  - Zoom on hover (desktop) or pinch (mobile)
  - Click to open lightbox
- **Thumbnails**:
  - Size: 80px x 80px
  - Border: 2px solid (transparent default, dark when active)
  - Gap: 8px
  - Hover: border color change
- **Lightbox**:
  - Full-screen overlay
  - Previous/Next arrows
  - Close button
  - Zoom in/out controls
  - Image counter (1/4, 2/4, etc.)

**Shadcn Components:**
- Custom image gallery component
- `Dialog` for lightbox
- `Button` for navigation arrows
- Next.js `Image` for optimized images

---

**Product Info Specifications:**

**Brand/Category:**
- Font: 12px, uppercase, medium gray
- Letter-spacing: 1px

**Product Title:**
- Font: 28px (mobile), 36px (desktop), Playfair Display
- Color: Dark gray
- Weight: 600

**Price:**
- Font: 28px, medium weight
- Color: Primary color or dark gray
- Display sale price and original price if on sale
- Sale price: Red or accent color
- Original price: Strikethrough, medium gray

**Reviews:**
- Stars: 16px, yellow
- Count: "(0 reviews)" link, 14px, medium gray
- Hover: Underline

**Description:**
- Font: 16px, line-height 1.6
- Color: Medium gray
- Max 2-3 lines with "Read more" link to expand

**Variants (Size/Color):**
- **Size Selector**:
  - Layout: Horizontal radio buttons styled as pills
  - Size: 40px x 40px (minimum)
  - Border: 1px solid light gray
  - Selected: Dark border, background fill
  - Hover: Border color change
  - Disabled: Opacity 50%, crossed-out
- **Color Selector**:
  - Layout: Horizontal color swatches
  - Size: 40px x 40px circles
  - Border: 2px solid (transparent default, dark when selected)
  - Show actual color or pattern
  - Hover: Scale 1.1
  - Disabled: Opacity 50%

**Shadcn Components:**
- `RadioGroup`, `RadioGroupItem` for size selection
- Custom color swatches with `Button` (ghost variant)

**Quantity Selector:**
- Layout: [-] [Number] [+]
- Buttons: 32px x 32px, border
- Number: Center-aligned, 16px
- Min: 1, Max: 10 (or stock quantity)

**Shadcn Components:**
- `Button` (outline variant) for increment/decrement
- `Input` (number) for quantity

**Add to Cart Button:**
- Size: Large, full width (mobile) or auto width (desktop)
- Background: Primary color (navy)
- Text: "Add to Cart", white, 16px, medium weight
- Padding: 16px 48px
- Hover: Slightly darker background
- Disabled state: If no size/color selected
- Loading state: Spinner when adding

**Shadcn Components:**
- `Button` (primary variant, large size)
- `Spinner` for loading state

**Add to Wishlist Button:**
- Style: Secondary (outline) or ghost
- Icon: Heart (outline), fill on click
- Text: "Add to Wishlist" or just icon
- Size: Same as Add to Cart

**Shadcn Components:**
- `Button` (outline or ghost variant)
- `Heart` icon from `lucide-react`

**USP / Trust Indicators:**
- Layout: Vertical list with icons
- Items:
  - Free shipping on orders over ₹1,000
  - Easy returns within 7 days
  - In stock / Ships within 2-3 days
- Icon: 16px, accent color
- Text: 14px, medium gray

**Shadcn Components:**
- Icons from `lucide-react` (Truck, RotateCcw, Check)

---

#### 5.2.3 PRODUCT DESCRIPTION TABS

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│  [Description] [Size Guide] [Care Instructions]      │
├──────────────────────────────────────────────────────┤
│                                                      │
│  This elegant three-piece suit includes...          │
│                                                      │
│  • Jacket with detailed stitching                   │
│  • Matching waistcoat                               │
│  • Coordinating trousers                            │
│                                                      │
│  Material: Premium cotton blend                     │
│  Perfect for formal occasions and parties           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specifications:**
- **Tab Layout**: Horizontal tabs (desktop), accordion (mobile)
- **Tab Style**: Underline on active tab
- **Content Padding**: 32px
- **Tabs**:
  1. **Description**: Full product details, features, materials
  2. **Size Guide**: Size chart table
  3. **Care Instructions**: Washing, care details

**Shadcn Components:**
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` (desktop)
- `Accordion` for mobile alternative

**Content (Askkart-specific):**
For each product, include:
- **Description**: Detailed product information
- **Materials**: Fabric composition
- **Features**: Key features and benefits
- **Size Guide**: Measurements table
- **Care**: Washing and care instructions

---

#### 5.2.4 YOU MAY ALSO LIKE / RELATED PRODUCTS

**Layout:**
Same as "New Arrivals" section on homepage

**Specifications:**
- **Section Title**: "You May Also Like" or "Complete the Look"
- **Section Padding**: 64px (mobile), 96px (desktop)
- **Product Grid/Carousel**: Same as homepage product cards
- **Number of Items**: 4-8 products

**Shadcn Components:**
- Same as New Arrivals (Carousel or Grid)

**Logic:**
- Show products from same category
- Show products from same brand
- Show frequently bought together
- Show recently viewed products

---

## 6. Component Mapping

### 6.1 Shadcn Components Required

| Component | Usage | Priority |
|-----------|-------|----------|
| `Button` | CTAs, links, form submissions | High |
| `Card`, `CardHeader`, `CardContent`, `CardFooter` | Product cards, USP cards, testimonials | High |
| `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious` | New Arrivals, Best Sellers, Related Products | High |
| `Input` | Email newsletter, search, quantity | High |
| `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem` | Header navigation | High |
| `Sheet` | Mobile hamburger menu | High |
| `Badge` | Best Seller, New Arrival, Sale labels | Medium |
| `Separator` | Section dividers, footer | Medium |
| `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem` | Product page navigation | Medium |
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | Product description tabs | Medium |
| `RadioGroup`, `RadioGroupItem` | Size selection | Medium |
| `Dialog` | Image lightbox, quick view | Medium |
| `Form`, `FormField`, `FormItem`, `FormLabel` | Newsletter signup, contact form | Medium |
| `Alert` | Promotional banner | Low |
| `Accordion` | Mobile product tabs alternative | Low |
| `Select`, `SelectTrigger`, `SelectContent`, `SelectItem` | Filters, sorting | Low |
| `Tooltip` | Additional info on hover | Low |

### 6.2 Custom Components to Build

1. **ProductCard**
   - Props: image, name, brand, price, href, badge (optional)
   - Features: Hover effects, quick view, wishlist icon

2. **ImageGallery**
   - Props: images array
   - Features: Thumbnails, main image, zoom, lightbox

3. **QuantitySelector**
   - Props: min, max, value, onChange
   - Features: Increment/decrement buttons

4. **ColorSelector**
   - Props: colors array, selected, onChange
   - Features: Color swatches, selection indicator

5. **SizeSelector**
   - Props: sizes array, selected, onChange
   - Features: Size pills, disabled state

6. **TestimonialCard**
   - Props: quote, author, rating
   - Features: Stars, quote styling

7. **CategoryCard**
   - Props: image, name, href
   - Features: Overlay, hover effects

8. **NewsletterForm**
   - Features: Email validation, success message

---

## 7. Technical Implementation

### 7.1 Technology Stack

- **Framework**: Next.js 15.3.4
- **React**: 19.0.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Component Library**: Shadcn UI (Radix UI primitives)
- **Icons**: Lucide React
- **Carousel**: Embla Carousel React 8.6.0
- **Forms**: React Hook Form 7.56.4 + Zod 3.25.28
- **Images**: Next.js Image component
- **Fonts**: Geist Sans, Geist Mono, Playfair Display

### 7.2 Project Structure

```
src/
├── app/
│   ├── page.tsx (Homepage)
│   ├── layout.tsx
│   ├── globals.css
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx (Product page)
│   ├── shop/
│   │   └── page.tsx
│   └── ...
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── product-card.tsx
│   ├── category-card.tsx
│   ├── image-gallery.tsx
│   ├── quantity-selector.tsx
│   ├── color-selector.tsx
│   ├── size-selector.tsx
│   ├── testimonial-card.tsx
│   ├── newsletter-form.tsx
│   └── ui/ (Shadcn components)
├── lib/
│   ├── utils.ts
│   └── data.ts (Mock product data)
├── hooks/
└── types/
    └── product.ts
```

### 7.3 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large desktop */
```

### 7.4 Performance Considerations

1. **Image Optimization**
   - Use Next.js Image component
   - WebP format with fallbacks
   - Lazy loading for below-the-fold images
   - Responsive images with srcset

2. **Code Splitting**
   - Dynamic imports for heavy components (lightbox, carousel)
   - Route-based code splitting (automatic with Next.js)

3. **Loading States**
   - Skeleton loaders for product cards
   - Loading spinners for async operations
   - Suspense boundaries for data fetching

4. **SEO**
   - Semantic HTML
   - Meta tags (title, description, og:image)
   - Structured data (Product schema)
   - Alt text for all images

5. **Accessibility**
   - ARIA labels where needed
   - Keyboard navigation
   - Focus states
   - Color contrast ratios (WCAG AA)

### 7.5 Existing Codebase Modifications

#### Update Color Palette (globals.css)
```css
:root {
  /* Update brand colors to match Childrensalon palette */
  --brand-background: 0 0% 100%; /* Pure white */
  --brand-primary: 217 24% 31%; /* Navy #2B3A52 */
  --brand-secondary: 120 12% 81%; /* Sage #C8D5C2 */
  --brand-accent-blush: 15 43% 92%; /* Blush #F4E6E2 */
  --brand-accent-mint: 172 24% 88%; /* Mint #D4E9E7 */
  --brand-accent-warm: 28 26% 86%; /* Warm #E8D9CF */
}
```

#### Update Typography (tailwind.config.ts)
Already has Playfair Display configured, ensure usage in headings.

### 7.6 Data Structure

#### Product Type
```typescript
interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  salePrice?: number;
  currency: string; // "INR"
  description: string;
  images: string[];
  variants: {
    sizes: string[];
    colors: { name: string; hex: string }[];
  };
  inStock: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
  rating: number;
  reviewCount: number;
}
```

### 7.7 Milestone Breakdown

#### Homepage Milestones
1. **Foundation & Global Styles**  
   - Import `public/logo` and hero/product imagery, finalize Tailwind tokens (colors, typography, spacing), confirm shared layout primitives with Shadcn containers/grids.  
   - _Completion Log_: `Pending`
2. **Header & Navigation**  
   - Build sticky header with logo, navigation, search, account/cart controls, and responsive sheet using Shadcn `navigation-menu`, `input`, and `sheet`.  
   - _Completion Log_: `Pending`
3. **Hero Experience**  
   - Craft hero with high-impact imagery, headline, supporting copy, primary/secondary CTAs, and accent badge leveraging `card`, `button`, and `badge`.  
   - _Completion Log_: `Pending`
4. **Core Merchandising Blocks**  
   - Implement promotional strip, category spotlights, featured/new arrivals carousel (Shadcn carousel + Embla), and brand narrative band with alternating media.  
   - _Completion Log_: `Pending`
5. **Social Proof & Conversion**  
   - Add testimonial slider, brand badges, and newsletter capture utilizing testimonial cards, `avatar`, and `form` primitives.  
   - _Completion Log_: `Pending`
6. **Footer & Global CTAs**  
   - Finalize multi-column footer, payment badges, and bottom CTA banner; ensure responsive polish, hover states, and shared tokens.  
   - _Completion Log_: `Pending`

#### Product Page Milestones
1. **Layout Scaffold**  
   - Establish responsive layout scaffold, breadcrumb, and structural grid using Shadcn `breadcrumb`, `separator`, and container utilities.  
   - _Completion Log_: `Pending`
2. **Media Gallery**  
   - Integrate existing `public` imagery into primary gallery, thumbnails, zoom/lightbox, and mobile carousel using Shadcn `aspect-ratio`, `carousel`, and custom modal.  
   - _Completion Log_: `Pending`
3. **Purchase Panel**  
   - Implement title, pricing, variant selectors (`radio-group`, `select`), availability messaging, CTAs, and trust badges.  
   - _Completion Log_: `Pending`
4. **Product Narrative & Cross-Sell**  
   - Deliver description tabs (`tabs`), care/size accordions, and related products grid linked to shared product-card component.  
   - _Completion Log_: `Pending`

> **Milestone Logging Protocol**: After each milestone is delivered, replace the corresponding `_Completion Log_` entry with a short summary (1–2 sentences) outlining key work completed and noteworthy details.

---

## 8. Content Inventory

### 8.1 Homepage Content

#### Hero Section
- **Headline**: "Discover Askkart's Collection"
- **Subheading**: "Shop online for the finest baby essentials and fashion, offering comfort, style, and convenience delivered at home"
- **CTA**: "Shop Now"
- **Background Image**: High-quality lifestyle image of babies/kids

#### Promotional Banner
- **Text**: "Season Special - New Collection for babies. Grab them Now!"

#### Categories
1. **NewBorn** - Image + "Shop Baby" link
2. **Kids** - Image + "Shop Kids" link
3. **Toys** - Image + "Shop Toys" link

#### New Arrivals
- Display 4-8 latest products from inventory

#### Featured Collection
- **Headline**: "Season Special"
- **Subheading**: "New Collection for babies. Grab them Now!"
- **Description**: "Discover Askkart's Collection! New Stylish highlighting babies comfort, style, and softness in clothes."
- **CTA**: "Shop Collection"

#### Best Sellers
- Display 4-8 best-selling products

#### Why Choose Us
1. Free Delivery on orders over ₹1,000
2. Premium Quality - Finest baby essentials and fashion
3. Curated Collection - Carefully selected for comfort and style
4. Easy Returns within 7 days

#### Testimonials
- Sharad Cholera testimonial (from current site)

#### Newsletter
- **Headline**: "Don't Miss Out!"
- **Subheading**: "Get the latest on sales, special offer, new releases and more…"

#### Footer
- Logo: "ask kart"
- Contact info (to be provided by client)
- Links: Shop, My Account, About, Contact
- Categories: Kids, Girls, Boys, Newborn, Toys
- Company: Privacy Policy, Terms & Conditions, Careers
- Social: Facebook, Instagram, Twitter, Pinterest

### 8.2 Product Page Content (Example: Three Piece Suit)

- **Category**: Boys Clothing Online India
- **Name**: Stylish Three Piece Suit for Boys – Formal Kids Outfit
- **Price**: ₹1,895.00
- **Description**: "Elegant formal outfit perfect for weddings, parties, and special occasions. Three-piece set includes jacket, waistcoat, and trousers."
- **Images**: Product photos from multiple angles
- **Sizes**: S, M, L, XL
- **Colors**: Available color variants
- **Features**:
  - Premium fabric
  - Comfortable fit
  - Perfect for formal occasions
  - Machine washable
- **Size Guide**: Measurements table
- **Care Instructions**: Washing and care details

---

## 9. Success Metrics

### 9.1 Design Goals
- ✅ Clean, luxury aesthetic matching Childrensalon
- ✅ Intuitive navigation and user experience
- ✅ Mobile-first responsive design
- ✅ Fast loading times (<3s)
- ✅ Accessible (WCAG AA)

### 9.2 User Experience Goals
- Clear product presentation
- Easy-to-use filters and search
- Smooth checkout flow
- Trust indicators throughout
- Engaging visuals and content

### 9.3 Business Goals
- Increase conversion rate
- Reduce bounce rate
- Increase average order value
- Improve customer trust and brand perception
- Mobile conversion parity with desktop

---

## 10. Appendix

### 10.1 Reference Links

**Research Sources:**
1. Nebulab - Design Systems for E-commerce
2. UXPin - Best Design System Examples
3. ConvertCart - Luxury Product Page Examples
4. Vervaunt - Luxury E-commerce Websites
5. Baymard Institute - E-commerce Navigation UX
6. Shopify Blog - E-commerce Website Design
7. VWO - Product Page Best Practices
8. Backlinko - Product Page Examples
9. GitHub - Shadcn E-commerce Components
10. Various Shadcn UI documentation pages

**Sites Analyzed:**
1. https://askkart.co.in/
2. https://www.childrensalon.com/

### 10.2 Design Inspiration

Key design elements from Childrensalon:
- Clean white backgrounds
- Generous spacing
- High-quality product photography
- Elegant serif typography for headings
- Subtle hover animations
- Soft, muted color palette
- Clear visual hierarchy
- Trust indicators (rewards, reviews)
- Seasonal/promotional sections
- Designer brand showcase
- Customer testimonials
- Editorial-style content sections

---

## 11. Next Steps

1. **Review & Approval**: Client reviews PRD and provides feedback
2. **Asset Gathering**: Collect high-quality product images, logos, brand assets
3. **Content Finalization**: Finalize all copy, product descriptions, contact info
4. **Design Mockups**: Create high-fidelity Figma mockups (optional)
5. **Development**: Implement homepage and product page per specifications
6. **Testing**: QA, responsive testing, cross-browser testing
7. **Launch**: Deploy to production

---

**Document Version**: 1.0  
**Date**: January 2025  
**Status**: Draft for Review  
**Next Review**: Pending client feedback

---

## Conclusion

This PRD provides a comprehensive blueprint for redesigning Askkart's homepage and product page with a luxury aesthetic inspired by Childrensalon, while preserving Askkart's unique content and brand identity. The design system, component specifications, and technical implementation plan ensure a cohesive, modern, and user-friendly e-commerce experience built with Next.js and Shadcn UI components.
