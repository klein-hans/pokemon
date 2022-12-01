import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

type CardProps = {
  url: string;
  name: string;
};

export const CustomCard = ({ url, name }: CardProps) => {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((res) =>
          setImageUrl(res.sprites.other.dream_world.front_default)
        );
    }
  }, []);

  return (
    <motion.div
      className='box hover:relative hover:z-10'
      initial={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          delay: 0.8,
        },
        scale: {
          type: 'spring',
          damping: 8,
          stiffness: 400,
          restDelta: 0.001,
        },
      }}
    >
      <Card
        sx={{ maxWidth: 345, height: 400 }}
        className='drop-shadow-lg hover:drop-shadow-2xl'
      >
        <img
          src={url ? imageUrl : 'https://placehold.co/300x200/png'}
          alt={`pokemon - ${name}`}
          className='h-96 w-72 max-h-80 object-contain'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            className='uppercase font-sans font-extrabold'
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
