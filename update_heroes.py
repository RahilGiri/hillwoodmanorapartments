import os

files_to_update = {
    "amenities.html": {
        "search": """  <!-- Split Header with Pool Image -->
  <section class="section" style="background-color: var(--c-bg-secondary);">
    <div class="container grid-2" style="align-items: center;">
      <div class="reveal">
        <span class="eyebrow">Amenities</span>
        <h1 style="margin-bottom: var(--space-sm);">Everything you need. Nothing you don't.</h1>
        <p style="font-size: 1.15rem; max-width: 500px;">We believe that the best amenities are the ones you actually use. From freshly renovated interiors to our sparkling community pool, Hillwood Manor is designed for comfortable, low-stress living.</p>
      </div>
      <div class="reveal" style="transition-delay: 0.2s;">
        <img src="images/community_pool.png" alt="Sparkling community pool at Hillwood Manor" style="border-radius: var(--border-radius-lg); box-shadow: var(--shadow-lg); width: 100%;">
      </div>
    </div>
  </section>""",
        "replace": """  <!-- Internal Hero -->
  <section class="hero-internal">
    <img src="images/community_pool.png" class="slide-img active" alt="Community Pool" style="opacity: 1;">
    <div class="hero-slider-overlay"></div>
    <div class="container reveal">
      <span class="eyebrow" style="color: var(--c-sand-light);">Amenities</span>
      <h1 style="max-width: 800px; margin: 0 auto var(--space-sm); color: #fff;">Everything you need. Nothing you don't.</h1>
      <p style="max-width: 600px; margin: 0 auto; font-size: 1.15rem; color: rgba(255,255,255,0.9);">We believe that the best amenities are the ones you actually use. From freshly renovated interiors to our sparkling community pool, Hillwood Manor is designed for comfortable, low-stress living.</p>
    </div>
  </section>"""
    },
    "neighborhood.html": {
        "search": """  <!-- Split Hero -->
  <section class="section" style="background-color: var(--c-bg-secondary);">
    <div class="container grid-2" style="align-items: center;">
      <div class="reveal">
        <span class="eyebrow">Location</span>
        <h1 style="margin-bottom: var(--space-sm);">The best of Union City, right around the corner.</h1>
        <p style="font-size: 1.15rem; max-width: 500px;">Located in the desirable Pleasant Valley area, Hillwood Manor gives you the quiet feel of a residential neighborhood while keeping you just minutes from shopping, dining, and major employers.</p>
      </div>
      <div class="reveal" style="transition-delay: 0.2s;">
        <img src="images/neighborhood_park.png" alt="Quiet neighborhood street near Hillwood Manor" style="border-radius: var(--border-radius-lg); box-shadow: var(--shadow-lg); width: 100%;">
      </div>
    </div>
  </section>""",
        "replace": """  <!-- Internal Hero -->
  <section class="hero-internal">
    <img src="images/neighborhood_park.png" class="slide-img active" alt="Neighborhood" style="opacity: 1;">
    <div class="hero-slider-overlay"></div>
    <div class="container reveal">
      <span class="eyebrow" style="color: var(--c-sand-light);">Location</span>
      <h1 style="max-width: 800px; margin: 0 auto var(--space-sm); color: #fff;">The best of Union City, right around the corner.</h1>
      <p style="max-width: 600px; margin: 0 auto; font-size: 1.15rem; color: rgba(255,255,255,0.9);">Located in the desirable Pleasant Valley area, Hillwood Manor gives you the quiet feel of a residential neighborhood while keeping you just minutes from shopping, dining, and major employers.</p>
    </div>
  </section>"""
    },
    "floor-plans.html": {
        "search": """  <!-- Page Header -->
  <section class="section" style="position: relative; padding-bottom: var(--space-md); text-align: center; background-color: var(--c-bg-secondary);">
    <div class="container reveal">
      <span class="eyebrow">Floor Plans &amp; Pricing</span>
      <h1 style="max-width: 800px; margin: 0 auto var(--space-sm);">Find the layout that fits your lifestyle.</h1>
      <p style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">Take a look at our available 1, 2, and 3 bedroom homes. <br><em style="font-size: 0.85rem; opacity: 0.8;">Note: Pricing and availability are subject to change. Please call the leasing office to confirm.</em></p>
    </div>
  </section>""",
        "replace": """  <!-- Internal Hero -->
  <section class="hero-internal">
    <img src="images/interior_living.png" class="slide-img active" alt="Living Room" style="opacity: 1;">
    <div class="hero-slider-overlay"></div>
    <div class="container reveal">
      <span class="eyebrow" style="color: var(--c-sand-light);">Floor Plans &amp; Pricing</span>
      <h1 style="max-width: 800px; margin: 0 auto var(--space-sm); color: #fff;">Find the layout that fits your lifestyle.</h1>
      <p style="max-width: 600px; margin: 0 auto; font-size: 1.1rem; color: rgba(255,255,255,0.9);">Take a look at our available 1, 2, and 3 bedroom homes. <br><em style="font-size: 0.85rem; opacity: 0.8;">Note: Pricing and availability are subject to change. Please call the leasing office to confirm.</em></p>
    </div>
  </section>"""
    },
    "contact.html": {
        "search": """  <!-- Page Header -->
  <section class="section" style="padding-top: var(--space-xl); padding-bottom: var(--space-md); background-color: var(--c-bg-secondary); text-align: center;">
    <div class="container reveal">
      <span class="eyebrow">Get in Touch</span>
      <h1 style="max-width: 800px; margin: 0 auto var(--space-sm);">Let's find your next home.</h1>
      <p style="max-width: 600px; margin: 0 auto; font-size: 1.15rem;">Whether you're ready to lease or just want to look around, our team is here to help.</p>
    </div>
  </section>""",
        "replace": """  <!-- Internal Hero -->
  <section class="hero-internal">
    <img src="images/hero_exterior.png" class="slide-img active" alt="Exterior" style="opacity: 1;">
    <div class="hero-slider-overlay"></div>
    <div class="container reveal">
      <span class="eyebrow" style="color: var(--c-sand-light);">Get in Touch</span>
      <h1 style="max-width: 800px; margin: 0 auto var(--space-sm); color: #fff;">Let's find your next home.</h1>
      <p style="max-width: 600px; margin: 0 auto; font-size: 1.15rem; color: rgba(255,255,255,0.9);">Whether you're ready to lease or just want to look around, our team is here to help.</p>
    </div>
  </section>"""
    }
}

base_dir = "/Users/rahilgiri/Downloads/hillwood"

for filename, data in files_to_update.items():
    filepath = os.path.join(base_dir, filename)
    with open(filepath, "r") as f:
        content = f.read()
    
    if data["search"] in content:
        content = content.replace(data["search"], data["replace"])
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Updated {filename}")
    else:
        print(f"Target not found in {filename}")
