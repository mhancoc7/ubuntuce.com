import React from 'react';
import Button from '../components/Button';
import TeamCard from '../components/TeamCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import { StaticImage } from 'gatsby-plugin-image';
import Href from '../components/Href';
import wallpapers from '../images/wallpapers.webp';
import jeremehancock from '../images/jeremehancock.jpg';
import russmacshane from '../images/russmacshane.jpg';
import mateogomez from '../images/mateogomez.jpg';

const Index = () => (
  <Layout>
    <section id="top" className="pt-5 lg:pt-20 lg:mx-10 mb-20">
      <div className="container mx-auto px-8 lg:flex mb-10 rounded-lg border border-solid border-none md:border-gray-200 p-5 lg:shadow-2xl m-5">
        <div className="text-left lg:w-1/2 lg:pr-10 mb-10">
          <h1 className="text-center text-2xl lg:text-4xl mb-12 md:mt-5">
            "freely ye have received, freely give"
          </h1>
          <p className="text-xl mt-6 font-light">
            Ubuntu Christian Edition (UbuntuCE) is a free, open source operating system geared
            towards Christians. It is based on the popular Ubuntu Linux.
          </p>
          <p className="text-xl mt-6 font-light">
            Ubuntu is a complete Linux-based operating system, freely available with both community
            and professional support.
          </p>
          <p className="text-xl mt-6 font-light">
            The goal of UbuntuCE is to bring the power and security of Ubuntu to Christians.
          </p>
        </div>
        <div className="lg:w-1/2 shadow-2xl">
          <StaticImage
            src="../images/bible-laptop.jpg"
            alt="Welcome To UbuntuCE"
            placeholder="blurred"
            className="bg-black min-h-full"
          />
        </div>
      </div>
    </section>
    <div className="flex justify-center" id="features" />
    <LabelText className="mt-10 text-gray-600 text-center md:-mb-10">Features</LabelText>
    <section>
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Web Content Filtering
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              UbuntuCE is pre-configured with CleanBrowsing. CleanBrowsing is an industry leading
              DNS provider that offers fast, secure, DNS with state of the art content filtering.
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage
            src="../images/cleanbrowsing.png"
            alt="CleanBrowsing"
            placeholder="blurred"
          />
        }
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Host Minder</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Host Minder is a simple application built with UbuntuCE in mind. It is a simple way to
              block unwanted websites from your system.
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage
            src="../images/hostminder-window.png"
            alt="Host Minder"
            placeholder="blurred"
          />
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Bible Study Software
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              We have included the best Bible Study software available for Linux. Including:
              BibleTime, Xiphos, and Bibledit.
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage src="../images/xiphos.png" alt="Xiphos" placeholder="blurred" />
        }
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Software for Churches
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              UbuntuCE is a great choice for Churches and includes OpenLP, as well as Presenter by
              WP.
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage
            src="../images/worship-extreme-presenter.png"
            alt="Presenter by WP"
            placeholder="blurred"
          />
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
              Beautiful Wallpapers
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              UbuntuCE is packed with a ton of beautiful Christian themed wallpapers to help you
              make your desktop fit you.
            </p>
          </div>
        }
        secondarySlot={<img src={wallpapers} alt="UbuntuCE Wallpapers" />}
      />
    </section>
    <div className="flex justify-center mb-10" id="contributors" />
    <section className="m-2 mx-10 mb-12">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Contributors</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          <div className="flex-1 px-3">
            <TeamCard image={jeremehancock} name="Jereme Hancock" title="Creator / Developer" />
          </div>
          <div className="flex-1 px-3">
            <TeamCard image={russmacshane} name="Russ MacShane" title="QA / Developer" />
          </div>
          <div className="flex-1 px-3">
            <TeamCard image={mateogomez} name="Mateo Gomez" title="Torrent Manager" />
          </div>
        </div>
      </div>
    </section>
    <div className="flex justify-center mb-10" id="faq" />
    <LabelText className="mt-10 mb-3 md:mb-5 text-gray-600 text-center">FAQ</LabelText>
    <section className="lg:mx-10 md:mb-32">
      <div className="container mx-auto rounded-lg border border-solid border-none md:border-gray-200 p-10 lg:shadow-2xl">
        <div>
          <div className="mb-3 font-bold text-xl italic">
            Is UbuntuCE officially supported by Canonical?
          </div>
          <div className="mb-3">
            <div className="pl-3">
              No, it is not "officially" supported. Our project is not funded by Canonical. However,
              we have contacted them regarding our project and they have given us guidelines to
              follow and have thanked us for supporting the Ubuntu Community and introducing Ubuntu
              to the Christian Community.
            </div>
          </div>
          <div className="mb-3 font-bold text-xl italic">
            Is UbuntuCE a new distribution of Ubuntu or a derivative?
          </div>
          <div className="mb-3">
            <div className="pl-3">
              Well it is really neither. UbuntuCE is based directly from the standard Ubuntu
              distribution and contains extra Christian software and is pre-configured with web
              content filtering. The graphical changes are minor and are only intended to tailor the
              project to Christians.
            </div>
          </div>
          <div className="mb-3 font-bold text-xl italic">
            Why should I use the Ubuntu CE if I can install the same software to the default Ubuntu?
          </div>
          <div className="mb-3">
            <div className="pl-3">
              The concept behind the UbuntuCE is not to deviate from the Ubuntu community. It is
              intended to draw a larger Christian base to the already thriving community of Ubuntu
              users. UbuntuCE simply makes it easier for Christians who are new to Linux to see the
              power of Ubuntu combined with the added benefit of having the best available Linux
              Christian software pre-installed.
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-center text-lg md:text-xl italic mt-10 md:mt-6 font-bold">
            Got additional questions? <span className="hidden md:inline md:ml-2">Join us on</span>
            <Href
              to="mailto:support@ubuntuce.com?subject=Slack%20Invitation%20Request&body=I%20would%20like%20to%20join%20the%20UbuntuCE%20Slack%20Group."
              className="ml-2"
            >
              <div className="w-20 md:w-40">
                <StaticImage
                  src="../images/slack.png"
                  alt="Join us on Slack"
                  placeholder="blurred"
                />
              </div>
            </Href>
          </div>
        </div>
      </div>
    </section>
    <div className="flex justify-center mb-10 md:mb-0" id="download" />
    <section className="mx-10">
      <div className="container mx-auto mb-20 rounded-lg border border-solid border-gray-200 text-center p-10 shadow-2xl">
        <h3 className="text-xl md:text-5xl font-semibold">Ready to try UbuntuCE?</h3>
        <p className="mt-8 flex flex-col md:flex-row justify-center">
          <Href
            to="https://sourceforge.net/projects/ubuntuce/files/ubuntu-ce-20.04.2-2021.07.30.0-desktop-amd64.iso.torrent/download"
            className="mb-3 md:mb-0 md:mr-2"
          >
            <Button className="w-full">Torrent Download</Button>
          </Href>
          <Href
            to="https://sourceforge.net/projects/ubuntuce/files/ubuntu-ce-20.04.2-2021.07.30.0-desktop-amd64.iso/download"
            className="md:ml-2"
          >
            <Button className="w-full">Direct Download</Button>
          </Href>
        </p>
        <p className="mt-10">
          Need{' '}
          <Href to="https://ubuntu.com/tutorials/tutorial-install-ubuntu-desktop?backURL=https://ubuntu.com/download/desktop/thank-you">
            help on installing
          </Href>
          ?
        </p>
        <p className="mt-5">
          Already running Ubuntu?{' '}
          <Href to="https://github.com/mhancoc7/repo.ubuntuce.com#readme">
            Check out the UbuntuCE Repo
          </Href>
          .
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
