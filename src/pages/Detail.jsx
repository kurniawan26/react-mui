import {
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function DetailPage() {
  const [switchLamp, setSwitchLamp] = useState(false);
  const [write, setWrite] = useState('');
  const [cardData, setCardData] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://api.jikan.moe/v4/seasons/now');
      const responseJson = await response.json();
      const { data } = responseJson;
      setCardData(data);
    };

    fetchApi();
  }, []);

  return (
    <div
      style={{
        margin: '2rem',
      }}
    >
      <h1>ini halaman detail {userId}</h1>
      <Input
        onChange={(e) => {
          setWrite(e.target.value);
        }}
        placeholder="Tulis Disini"
      />
      <br />
      <button
        onClick={() => {
          setSwitchLamp(!switchLamp);
        }}
      >
        {switchLamp ? 'Matikan' : 'Nyalakan'} Lampu
      </button>

      <h3>Lampu {switchLamp ? 'Menyala' : 'Mati'} </h3>
      {write}

      <div className="container">
        {cardData?.map((item) => {
          return <AnimeComponent title={item.title} />;
        })}
      </div>
    </div>
  );
}

function AnimeComponent({ title }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
