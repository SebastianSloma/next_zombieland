import Attack from '@/components/Attack';
import Hands from '@/components/Hands';
import Hero from '@/components/Hero';
import Horde from '@/components/Horde';
import House from '@/components/House';
import Road from '@/components/Road';
import ZombieOne from '@/components/ZombieOne';

export default function Home() {
	return (
		<>
			<Hero />
			<ZombieOne />
			<Road />
			<Horde />
			<House />
		</>
	);
}
