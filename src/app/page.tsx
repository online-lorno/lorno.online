export default function PageHome() {
  return (
    <div className="flex min-h-[calc(100vh_-_113px)] w-full items-center justify-center">
      <div className="flex flex-col">
        <p className="text-size-label text-white">Hi all. I am</p>
        <p className="text-size-headline text-white">Leonard Laput</p>
        <p className="mb-20 text-size-subheadline text-color-secondary-200">
          &gt; Full Stack Developer
        </p>
        <p className="mb-2 text-size-label text-color-secondary-50">
          &#47;&#47; you can also see it on my Github page
        </p>
        <p className="text-size-label">
          <span className="text-color-secondary-200">const</span>{' '}
          <span className="text-color-accent-100">githubLink</span>
          {' = '}
          <a
            href="https://github.com/online-lorno"
            className="text-color-accent-50 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            &quot;https://github.com/online-lorno&quot;
          </a>
        </p>
      </div>
    </div>
  )
}
