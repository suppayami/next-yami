# Next.js Yami

Personal template, it's a PITA to setup a frontend project.

[![Dependencies Status](https://david-dm.org/suppayami/next-yami.svg)](https://david-dm.org/suppayami/next-yami) [![DevDependencies Status](https://david-dm.org/suppayami/next-yami/dev-status.svg)](https://david-dm.org/suppayami/next-yami?type=dev)

## Setup
- Find all `// TODO` in the code to configure stuffs.
- Configure stuffs in `src/common/config.ts`
- Configure i18n in `src/common/i18n`
- Add more stores in `src/common/store/store.ts`
- _(Optional)_ Configure API Endpoint in `apollo.config.js` for apollo-cli tooling
- _(Optional)_ Configure API Endpoint in `next.config.js` for API proxy
- _(Optional)_ Configure Apollo Authorization in `src/ssr/apollo_authorization.ssr.ts`

## What packed inside
1. Apollo Client
2. i18next
3. MobX
4. Tailwind
5. React Hook Form
6. Jest & React Testing Library

## SSR
- Use utilities in `src/ssr`
- Use `isBrowser()` and `isServer()` to check if the AppTree is rendered in browser or server
- Use `getInitialState()` to get initial state for application (MobX Store) and for Apollo Client
- See `src/pages/todos.tsx` for example
- _(Optional)_ Call `await apolloAuthorization(apollo)` in state constructor to put Authorization Token into Apollo Client

## Example GraphQL API
The example GraphQL API in this template is served by [FakeQL](https://fakeql.com/)

## Docker
Default `Dockerfile` build and serve production build with Next server, suitable for SSR or hybrid pages. If the site is built pure static, you can use either nginx or any static platform such as netlify to serve the contents.
