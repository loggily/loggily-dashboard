import {
  SunIcon as LightSunIcon
} from '@heroicons/react/24/outline';

import {
  MoonIcon as DarkMoonIcon
} from '@heroicons/react/24/solid';


export default function LightDarkButton() {
  return (
    <button type='button' className='size-8 rounded-full border border-emerald-500 shadow-emerald-200 hover:shadow-emerald-300 justify-items-center'>
      <DarkMoonIcon className="size-6 text-emerald-500" />
    </button>
  );
}

