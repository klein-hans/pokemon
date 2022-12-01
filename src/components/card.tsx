import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
    <Card
      sx={{ maxWidth: 345, height: 450 }}
      className='drop-shadow-lg hover:drop-shadow-2xl'
    >
      <CardMedia
        component='img'
        height='100'
        image={url ? imageUrl : 'https://placehold.co/300x200/png'}
        alt={`pokemon - ${name}`}
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
  );
};