import TENLogo from '../../assets/logos/TEN_logo.png'


export default function Loader() {
    return (
            <div class="flex-col gap-4 w-full flex items-center justify-center py-40">
                <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    <img src={TENLogo} alt="logo" className='rounded-full w-25 dark:invert' />
                </div>
            </div>
    )
}
