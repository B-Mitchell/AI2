import Image from 'next/image'

export default function Home() {
  return (
    <main className='leading-6'>
      {/* HERO SECTION */}
      <div className='w-[100%] my-16'>
        <p className="text-center text-[1.3rem] font-semibold bg-gradient-to-r from-black to-transparent text-transparent bg-clip-text"
        >AI&sup2;THOR</p>
      </div>

      <div className='md:w-[60%] lg:w-[50%] w-[80%] m-auto border rounded-lg border-black p-4 shadow-lg shadow-gray-500'>
        <p className='font-bold text-[1.2rem] my-4'>AI Creating AI</p>
        <p className='text-justify'>This website represents a historic milestone: the first platformm designed ad implemented entirely by artificial intelligence. Using Claude AI and Cursor Editor, we've created a system that can generate, optimize, and deploy other AI systems.</p>

        <div className='flex justify-between w-[100%]'>
          <div className='w-[45%] border p-2 rounded-lg my-3'>
            <p className='text-[1.01rem] my-1'>Creation Process</p>
            <ul className='list-disc pl-5'>
              <li >Designed by Claude AI</li>
              <li >Built with cursor Editor</li>
              <li >Self-optimizing code</li>
            </ul>
          </div>
          <div className='w-[45%] border p-2 rounded-lg my-3'>
            <p className='text-[1.01rem] my-1'>AI Capabilities</p>
            <ul className='list-disc pl-5'>
              <li >Autonomous Development</li>
              <li >Code generation</li>
              <li >Intelligent design</li>
            </ul>
          </div>
        </div>
        
      </div>

      <div className='mt-24 md:w-[60%] lg:w-[50%] w-[80%] m-auto border rounded-lg border-black p-4 shadow-lg shadow-gray-500'>
        <p className='font-bold text-[1.2rem] my-4'>Powered  by Advanced AI</p>
        <p className='text-justify'>Created through the collaboration of two powerful AI systems: Claude AI for intelligence and reasoning, and Cursor Editor for code generation and implementation. This represents the future of software development - where AI creates AI.</p>

        <div className='flex justify-between w-[100%]'>
          <div className='w-[45%] border p-2 rounded-lg my-3'>
            <p className='text-[1.01rem] my-1'>Claude AI</p>
            <ul className='list-disc pl-5'>
              <li >Advanced Reasoning</li>
              <li >Natural Language processing</li>
              <li >Creative problem solving</li>
            </ul>
          </div>
          <div className='w-[45%] border p-2 rounded-lg my-3'>
            <p className='text-[1.01rem] my-1'>Cursor Editor</p>
            <ul className='list-disc pl-5'>
              <li >AI code generation</li>
              <li >Intelligent completion</li>
              <li >Real-time optimization</li>
            </ul>
          </div>
        </div>
        
      </div>

      <div className='md:w-[60%] lg:w-[50%] w-[80%] m-auto mt-24'>
        <p className='font-bold text-[1.2rem] my-4'>Interactive AI Assistant</p>
      </div>
        <div className='mt-5 md:w-[60%] lg:w-[50%] w-[80%] m-auto border rounded-lg border-black shadow-lg shadow-gray-500 mb-6 overflow-hidden'>
          <div >
            <p className="flex gap-2 bg-gray-400 p-3">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </p>
          </div>
          <p className='text-justify p-4'>Welcome to the first website created by AI, for AI. I am an AI assistant created by Al using the Cursor Editor - representing a new era where AI creates AI. Let me tell you about how artificial intelligence is now developing its own kind...</p>

          <div className='w-[100%] flex pl-5 border-t-2'>
            <p className='font-extrabold align-middle p-2'>{`>`}</p>
            <input type='text' className='animate-blink cursor-text w-[100%] outline-none p-2' placeholder='Ask me about AI development...'/>
          </div>
        </div>


      
    </main>
  )
}
