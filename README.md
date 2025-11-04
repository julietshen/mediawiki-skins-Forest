# Forest Skin for MediaWiki

A calm, soothing MediaWiki skin inspired by nature and greenery.

## Features

- 🌿 Nature-inspired color palette with soft greens and earth tones
- 🎨 Clean, modern design with smooth transitions
- 📱 Fully responsive layout for desktop, tablet, and mobile
- ♿ Accessibility-focused with proper focus states
- 🚀 Built on MediaWiki's modern SkinMustache framework

## Installation

1. Download or clone this repository into your MediaWiki `skins/` directory:
   ```bash
   cd /path/to/mediawiki/skins
   git clone <repository-url> Forest
   ```

2. Add the following to your `LocalSettings.php`:
   ```php
   wfLoadSkin( 'Forest' );
   $wgDefaultSkin = 'forest';
   ```

3. Navigate to Special:Version on your wiki to verify that the skin is successfully installed.

## Requirements

- MediaWiki 1.39.0 or later

## Design Philosophy

Forest skin provides a calming, nature-inspired reading experience with:
- Soft, muted green color palette
- Generous white space for readability
- Serif headings paired with sans-serif body text
- Subtle shadows and rounded corners
- Smooth animations and transitions

## File Structure

```
Forest/
├── i18n/               # Internationalization files
├── resources/          # CSS and JavaScript
│   ├── skin.less      # Main stylesheet
│   └── skin.js        # JavaScript enhancements
├── templates/          # Mustache templates
│   └── skin.mustache  # Main template
├── skin.json          # Skin configuration
└── README.md          # This file
```

## Development

To customize the skin:

1. Edit `resources/skin.less` to modify styles
2. Edit `templates/skin.mustache` to modify the HTML structure
3. Edit `resources/skin.js` to add interactive features

## License

GPL-2.0-or-later

## Credits

Created with MediaWiki's SkinMustache framework.
