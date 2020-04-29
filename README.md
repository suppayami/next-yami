# Next.js Yami

Personal template, it's a PITA to setup a frontend project.

## Setup
- Find all `// TODO` in the code to configure stuffs.
- Configure stuffs in `src/common/config.ts`
- Configure i18n in `src/common/i18n`
- Add more stores in `src/common/store/store.ts`
- (Optional) Configure API Endpoint in `apollo.config.js` for apollo-cli tooling
- (Optional) Configure API Endpoint in `next.config.js` for API proxy
- (Optional) Configure Apollo Authorization in `src/ssr/apollo_authorization.ssr.ts`

## What packed inside
1. Apollo Client
2. i18next
3. MobX
4. Tailwind
5. Formik
6. Jest & React Testing Library

## SSR
- Use utilities in `src/ssr`
- Use `isBrowser()` and `isServer()` to check if the AppTree is rendered in browser or server
- Use `getInitialState()` to get initial state for application (MobX Store) and for Apollo Client
- See `src/pages/todos.tsx` for example
- (Optional) Call `await apolloAuthorization(apollo)` in state constructor to put Authorization Token into Apollo Client

## Example GraphQL API
The example GraphQL API in this template is served by [FakeQL](https://fakeql.com/)
