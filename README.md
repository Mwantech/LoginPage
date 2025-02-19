app/
├── index.tsx                  # Welcome screen (initial route)
├── auth/
│   ├── _layout.tsx           # Auth group layout
│   ├── login.tsx             # Login screen
│   └── signup.tsx            # Signup screen
├── (tabs)/
│   ├── _layout.tsx           # Tabs layout
│   ├── index.tsx             # Home tab
│   ├── profile.tsx           # Profile tab
│   └── [...missing].tsx      # Catch-all for missing routes
└── +not-found.tsx            # Not found screen