import { ReactNode } from 'react';
import { Flex, Menu, Image } from '@chakra-ui/react';

import logo from '../assets/logo.svg';

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Menu>{children}</Menu>
    </>
  );
}
