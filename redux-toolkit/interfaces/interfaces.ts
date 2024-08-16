import { userData } from "@/types/common.type";

export interface userSliceData {
  isLoggedIn: boolean;
  userData: userData | null;
}

export interface registrationData {}

export interface globalStateInterface {
  counter: number;
}

export interface teamMembersProps {
  thumbnail: string;
  title: string;
  designation: string;
}

export interface CommonHeadingProps {
  sectionName?: string;
  title?: string;
  description?: string;
  textAlignLeft?: boolean;
  sectionNameDots?: boolean;
  maxWidthBlock?:number
}

export interface whyListProps {
  listNumber: number;
  title: string;
  description: string;
}

export interface testimonialProps {
  img: string;
  name: string;
  subtext: string;
  designation: string;
}
