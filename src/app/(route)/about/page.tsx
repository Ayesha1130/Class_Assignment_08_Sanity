import React from 'react'

const about = () => {
  return (
    <div className='bg-gray-400'>
        <div   className="flex bg-cover h-[40vh] bg-center justify-center items-center font-serif text-black"
      style={{ backgroundImage: "url(/images/bm.avif)" }}>
        <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold font-serif'>About Us</h1>
</div>
        
        <div className='bg-white max-w-6xl mx-auto p-4 space-y-5'>
        <div className="flex flex-col gap-6 p-4 border bg-primary rounded-lg">
            <h2 className="text-3xl font-semibold font-serif">Our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc vel neque pellentesque condimentum. Donec laoreet mi et velit semper, non consectetur justo consectetur. Duis in lectus vel ligula semper rutrum. Sed ultricies, felis vel ultricies scelerisque, arcu velit condimentum ipsum, non consectetur lectus velit vel ipsum.</p>
        </div>
        <div className="flex flex-col gap-6 p-4 border bg-primary rounded-lg">
            <h2 className="text-3xl font-semibold font-serif">Our Vision</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc vel neque pellentesque condimentum. Donec laoreet mi et velit semper, non consectetur justo consectetur. Duis in lectus vel ligula semper rutrum. Sed ultricies, felis vel ultricies scelerisque, arcu velit condimentum ipsum, non consectetur lectus velit vel ipsum.</p>
        </div>
        <div className="flex flex-col gap-6 p-4 border bg-primary rounded-lg">
            <h2 className="text-3xl font-semibold font-serif">Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc vel neque pellentesque condimentum. Donec laoreet mi et velit semper, non consectetur justo consectetur. Duis in lectus vel ligula semper rutrum. Sed ultricies, felis vel ultricies scelerisque, arcu velit condimentum ipsum, non consectetur lectus velit vel ipsum.</p>
        </div>
        </div>
        


      
    </div>
  )
}

export default about
