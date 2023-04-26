import { styled } from '@mui/material/styles';
import CardListComponent from './components/CardList';
import { ICardItem } from './components/Card';

const HomeWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  paddingTop: theme.spacing(18),
}));

const HomeComponent = () => {
  const listProduct: ICardItem[] = [
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title:
        '2020 Word Champs Gaming Warzone  2020 Word Champs Gaming Warzone 2020 Word Champs Gaming Warzone 2020 Word Champs Gaming Warzone 2020 Word Champs Gaming Warzone 2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 1',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
  ];
  return (
    <HomeWrapper>
      <CardListComponent list={listProduct ?? []} />
    </HomeWrapper>
  );
};

export default HomeComponent;
