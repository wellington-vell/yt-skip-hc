# YT Skip HC

A browser extension that automatically skips YouTube's harmful content warning screen, allowing you to continue watching videos without manual intervention.

## Features

- **Automatic Skip**: Automatically clicks the "Continue" button on YouTube's harmful content warning screens
- **Real-time Monitoring**: Uses MutationObserver and interval checks to detect warning screens as they appear
- **Lightweight**: Minimal code footprint with efficient DOM monitoring
- **Manifest V3**: Built with the latest Chrome extension manifest version

## Installation

### Manual Installation

1. Clone or download this repository
2. Open your browser's extension management page:
   - **Chrome**: Navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" or "Load temporary add-on"
5. Select the directory containing this extension

### From Source

```bash
git clone <repository-url>
cd yt-skip-hc
# Then follow the manual installation steps above
```

## How It Works

The extension monitors YouTube pages for the harmful content warning container. When detected, it automatically:

1. Locates the warning message container (`#player-error-message-container`)
2. Finds the "Continue" button within the container
3. Clicks the button if it's enabled
4. Stops monitoring after successfully clicking (to avoid unnecessary processing)

The extension uses:

- **MutationObserver**: Watches for DOM changes that might indicate a warning screen appearing
- **Interval Check**: Periodically checks for the warning screen (every 500ms) as a fallback
- **Cleanup**: Properly disconnects observers and clears intervals when done or when the page unloads

## Permissions

- `activeTab`: Required to interact with YouTube tabs
- `*://*.youtube.com/*`: Host permission to run on YouTube pages

## Browser Compatibility

- ✅ Chrome (Manifest V3)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Copyright

Copyright (c) 2026 Wellington Costa

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

## Disclaimer

This extension is provided as-is for convenience. Use responsibly and in accordance with YouTube's Terms of Service.
