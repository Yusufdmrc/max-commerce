import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Kategoriler</h3>
            <Link href="#">Telefonlar</Link>
            <Link href="#">Dizüstü Bilgisayarlar</Link>
            <Link href="#">Masaüstü Bilgisayarlar</Link>
            <Link href="#">Saatler</Link>
            <Link href="#">Televizyonlar</Link>
            <Link href="#">Aksesuarlar</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Hakkımızda</h3>
            <p className="mb-2">
              Elektronik mağazamızda, müşterilerimize en yeni ve en iyi
              cihazları ve aksesuarları sunmaya kendimizi adadık. Çok çeşitli
              telefonlar, TV'ler, dizüstü bilgisayarlar, saatler ve aksesuarlar
              ile.
            </p>
            <p>&copy; {new Date().getFullYear()} Max-Commerce</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Bize Ulaş</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
