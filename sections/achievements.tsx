import { VscVerifiedFilled } from "react-icons/vsc";


const AchievementsSection = () => {
  return (
    <div className='p-2 font-sans mb-8'> 
          <p className='font-bold text-2xl mb-4 md:text-xl text-black dark:text-white'>Achievements</p>
          <div className='space-y-4'>
                          {/* CARD */}
                          <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-4 rounded-lg shadow-lg'>
                            <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                                <VscVerifiedFilled className="text-blue-500 text-3xl"/>
                            </div>
          
                              <div className='flex flex-col min-w-0'>
                                  <p className='font-sans font-bold text-black dark:text-white text-lg'>Top 20 in Suprathon</p>
                                  <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>Hackathon • Jul 2025</p>
                                  <div className='font-sans p-2 mt-1 bg-gray-100 dark:bg-[#1f1f1f] rounded-lg'>
                                      <ul className='text-gray-700 dark:text-white/70 text-xs'>
                                        <li>Presented my idea Aarogya AI, a one-stop solution for AI based Health Care in India.</li>
                                        <li className="mt-2"><a href="https://drive.google.com/file/d/1Iv8_6W9TdRom5l0WWjGZKItG5t5HLifE/view" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-semibold hover:underline">View Certificate</a></li>
                                      </ul>
                                  </div>
                              </div>
          
                          </div>
          
                          <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-4 rounded-lg shadow-lg'>
                              <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                                    <VscVerifiedFilled className="text-blue-500 text-3xl"/>
                              </div>
          
                              <div className='flex flex-col min-w-0'>
                                  <p className='font-sans font-bold text-black dark:text-white text-lg'>Flash 2K25 <span className="text-blue-600 dark:text-blue-300">{"("}1st Hackathon Win !{")"}</span></p>
                                  <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>Hackathon • Jan 2025</p>
                                  <div className='font-sans p-2 mt-1 bg-gray-100 dark:bg-[#1f1f1f] rounded-lg'>
                                      <ul className='text-gray-700 dark:text-white/70 text-xs'>
                                        <li>Developed Pill-Pal, a web application designed to provide medication reminders for elderly users.</li>
                                        <li className="mt-2"><a href="https://drive.google.com/file/d/1I_xiXDhK_kRg-cbzxEEH8H8YE0BlMTiq/view" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-semibold hover:underline">View Certificate</a></li>
                                      </ul>
                                  </div>
                                  
                              </div>
                          </div>
          
                          <div className='bg-[#ffffff] dark:bg-[#131313] flex items-start gap-4 p-4 rounded-lg shadow-lg'>
                              <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                                    <VscVerifiedFilled className="text-blue-500 text-3xl"/>
                              </div>
          
                              <div className='flex flex-col min-w-0'>
                                  <p className='font-sans font-bold text-black dark:text-white text-lg'>Academic Excellence Award</p>
                                  <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>Academics • Jan 2023</p>
                                  <div className='font-sans p-2 mt-1 bg-gray-100 dark:bg-[#1f1f1f] rounded-lg'>
                                      <ul className='text-gray-700 dark:text-white/70 text-xs'>
                                        <li>Recieved for outstanding performance in studies at Ascent Classes.</li>
                                        <li className="mt-2"><a href="https://drive.google.com/file/d/1cgFKjL-ebAwq00BPivaLBWJFidU4uzsi/view" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-semibold hover:underline">View Certificate</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
    </div>
  )
}

export default AchievementsSection