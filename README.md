# CS Club Site

This is the project repo for the official site of the Computer Science Club at
the University of Northwestern - St. Paul. It is created with the following
libraries:

- [Next.js](https://nextjs.org) - Main server framework
  - [React](https://react.dev) - Frontend
- [Motion](https://motion.dev) - Animation library
- [Tailwind CSS](https://tailwindcss.com) - Alternative styling
- [Fastify](https://fastify.dev/) - HTTP server

The site will be used to showcase everyone's projects and endeavors at UNW and
beyond. Everyone gets their own route. There will also eventually be a
slideshow for use inside UNW.

## Contributing

- Create files in your route (for example, `./src/app/students/breyon-gunn`)
  that adhere to [university
  policies](https://www.unwsp.edu/about-us/christian-values/declaration-of-christian-community/).
- Collaborate with others on the main pages with permission (e.g.
  `./src/app/page.tsx`)
- Create your own components in `./src/components`

### Getting Started

- Learn [React](https://react.dev)
- Create your very own directory in `./src/app/students/your-name`
- Create a `./src/app/students/your-name/page.tsx`
- Input this code:

```tsx
export default function Page() {
  return (
    <>
      <h1>This is your new route!</h1>
      <p>Put some cool stuff in here!</p>
    </>
  );
}
```

### Documentation

To learn how to create your own page, take a look at the following resources:

- [Next.js documentation](https://nextjs.org/docs): For questions like "where
  do I put my files?" or "how do I create a dynamic webpage?" However, you
  shouldn't have to go here much.
  - [Where do I put
    files?](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
  - [How do I access an API endpoint
    server-side?](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
- [React documentation](https://react.dev/reference/react): This is an
  important one. Go here to learn the basics of how to make a webpage in our
  app.
  - [Tutorial](https://react.dev/reference/react)
- [Tailwind CSS
  documentation](https://tailwindcss.com/docs/styling-with-utility-classes):
  Look here for information on how to use Tailwind CSS.
- [Motion documentation](https://motion.dev/docs/react-quick-start): look here
  to figure out how to do animations.

### Development Server

To run the development server so that you can test out your pages on your own
computer, go into the terminal and execute this:

```bash
npm run dev
```

### FAQ

#### Where do I put my files?

If you are making your own page, create a file under
`src/app/students/your-name/page.tsx`. For example, my name is Austin Long, so
I should put my page at `src/app/students/austin-long/page.tsx`. To go to your
page in the [development server](#development-server), navigate to
`http://localhost:3000/students/your-name`.

#### How do I create images?

TODO
