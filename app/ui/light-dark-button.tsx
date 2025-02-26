import {
  SunIcon as LightSunIcon
} from '@heroicons/react/24/outline';

import {
  MoonIcon as DarkMoonIcon
} from '@heroicons/react/24/solid';
import { Button } from '@heroui/button';

export default function LightDarkButton() {
  return (
    <Button
      className='border-emerald-500'
      variant="bordered"
      size="sm"
      radius="full"
      startContent={<DarkMoonIcon className="size-6 text-emerald-500" />}
      isIconOnly />
  );
}

