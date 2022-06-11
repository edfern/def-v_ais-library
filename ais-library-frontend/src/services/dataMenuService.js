import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as VsIcons from 'react-icons/vsc';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const MenuInfo = [
  {
    path: '/dashboard',
    title: 'Home',
    iconLeft: <AiIcons.AiFillHome />,
    iconRight: '',
  },
  {
    path: '',
    title: 'Gestionar prestamo',
    iconLeft: <GiIcons.GiBlackBook />,
    iconRight: <FiIcons.FiChevronRight />,

    subMenu: [
      {
        title: 'Nuevo prestamo',
        path: 'loan/new',
        icon: <RiIcons.RiNewspaperLine />,
      },
      {
        title: 'Devolver libro',
        path: 'loan/restore',
        icon: <VsIcons.VscDebugStepBack />,
      },
      {
        title: 'Ver prestamos',
        path: 'loan/view',
        icon: <VsIcons.VscOpenPreview />,
      },
      {
        title: 'Hitorial de prestamos',
        path: 'loan/history',
        icon: <BsIcons.BsClockHistory />,
      },
    ],
  },
  {
    path: '',
    title: 'Gestionar libro',
    iconLeft: <GiIcons.GiBookPile />,
    iconRight: <FiIcons.FiChevronRight />,

    subMenu: [
      {
        title: 'Libros',
        path: 'books/book',
        icon: <BsIcons.BsBook />,
      },
      {
        title: 'Ejemplares',
        path: 'books/specimens',
        icon: <MdIcons.MdFormatListNumbered />,
      },
    ],
  },
  {
    path: 'students',
    title: 'Estudiantes',
    iconLeft: <BsIcons.BsPersonLinesFill />,
    iconRight: <FiIcons.FiChevronRight />,
  },
  {
    path: 'teachers',
    title: 'Maestros',
    iconLeft: <GiIcons.GiTeacher />,
    iconRight: <FiIcons.FiChevronRight />,
  },
];
