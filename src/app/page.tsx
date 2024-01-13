import Attack from '@/components/Attack';
import Hero from '@/components/Hero';
import Horde from '@/components/Horde';
import Road from '@/components/Road';
import ZombieOne from '@/components/ZombieOne';

export default function Home() {
	return (
		<>
			<Hero />
			<ZombieOne />
			<Road />
			<Horde />
      <Attack/>
		</>
	);
}
