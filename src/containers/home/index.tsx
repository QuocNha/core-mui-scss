import { styled } from '@mui/material/styles';
import CategoryList from './components/CategoryList';
import { ICardItem } from './components/Category';

const HomeWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  paddingTop: theme.spacing(18),
}));

const HomeComponent = () => {
  const listProduct: ICardItem[] = [
    {
      name: 'Image 11',
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
      name: 'Image 10',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 9',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 8',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 7',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 6',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 5',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 4',
      src: 'https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80',
      title: '2020 Word Champs Gaming Warzone ',
      user: {
        avatar:
          'https://tse3.mm.bing.net/th?id=OIP.p_1rXaDvAXo_6GXls_QXpgHaK9&pid=Api&P=0',
        name: ' Dang Quoc Nha',
      },
    },
    {
      name: 'Image 3',
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
      name: 'Image 2',
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
      <CategoryList list={listProduct ?? []} />
    </HomeWrapper>
  );
};

export default HomeComponent;
