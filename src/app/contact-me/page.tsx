import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me',
}

export default function PageContactMe() {
  return (
    <div className="flex min-h-[calc(100vh_-_113px)] w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-size-subheadline">Contact Me</p>
        <p className="text-size-subheadline">&lt; WIP &gt;</p>
      </div>
    </div>
  )
}
