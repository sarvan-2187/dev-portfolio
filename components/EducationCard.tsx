import Image from "next/image";

type EducationCardProps = {
    logo: string;
    alt: string;
    institution: string;
    detail: string;
};

export default function EducationCard({
    logo,
    alt,
    institution,
    detail,
}: EducationCardProps) {
    return (
        <div className='bg-[#ffffff] dark:bg-black dark:outline dark:outline-1 flex items-start gap-4 p-4 rounded-lg shadow-lg'>
            <div className='w-[48px] h-[48px] flex-shrink-0 rounded-full border-4 border-slate-100 bg-slate-200 dark:bg-[#2f2f2f] dark:border-[#1f1f1f] p-1 flex items-center justify-center'>
                <Image src={logo} alt={alt} width={50} height={50} className="object-contain rounded-full" draggable={false} />
            </div>

            <div className='flex flex-col min-w-0'>
                <p className='font-sans font-bold text-black dark:text-white text-lg'>{institution}</p>
                <p className='font-sans text-gray-700 dark:text-white/70 text-sm'>{detail}</p>
            </div>
        </div>
    );
}
