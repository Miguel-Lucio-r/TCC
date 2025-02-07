import { styled } from '@/styles';

export const AccountConatiner = styled('div', {
  color: '$gray900',
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  width: '100%',

  h1: {
    margin: '1rem',
    fontSize: '$2xl',
    fontFamily: '$roboto'
  },
});

export const NavAccount = styled('div', {
  display: 'flex',
  width: '90%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 'auto',

  h2: {
    fontSize: '$lg',
    fontFamily: '$poppins'
  },

  a: {
    display: 'flex',
    flexDirection: 'row',
    width: '25%',
    height: '80px',
    padding: '0.875rem',
    border: '1px solid black',
    borderRadius: '8px',
    alignItems: 'center',
    textDecoration: 'none',
    listStyle: 'none',
    color: '$gray900',

    '&:hover': {
      h2: {
        marginBottom: '10px',
        borderBottom: '1px solid $gray900',
        content: '',
        transition: '0.1s',
      }
    },
  }
});


export const DivOptions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '25%',
  height: '80px',
  padding: '0.875rem',
  border: '1px solid black',
  borderRadius: '8px',
  alignItems: 'center',
  listStyle: 'none'

});

export const DivImage = styled('div', {
  background: '$greenMenta300',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '12%'
});

export const DivLabelText = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'justify',

  h2: {
    fontFamily: '$poppins',
    fontSize: '$xl',
    height: '50%',
    width: '60%'
  },

  label: {
    height: '50%',
    color: '$gray900',
    opacity: '0.8'
  }
});

