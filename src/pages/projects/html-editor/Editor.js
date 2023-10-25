import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageOnlinePlayground from 'assets/online-playground.png';
import imageOnlinePlaygroundEditor from 'assets/online-playground-editor.png';
import onlineMarkdownEditor from 'assets/online-markdown-editor.png';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoMarkdownDemo from 'assets/Markdown-editor.mp4';
import videoHTMLCodeEditor from 'assets/HTML_code_editor.mp4';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const title = 'Online HTML, CSS and Javascript Playground';
const description =
  'I worked as the development of this online code editor. Here the users can develop HTML apps and style them using the CSS and also can include interactivity using the inbuilt Javascript. It is good for beginners to practice the new learnt web development skills online without installing anything.';
const roles = [
  'Web Development',
  'UI/UX Design',
  'React, TailwindCSS',
  'Front End Development',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.smartsparrow.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={[imageOnlinePlayground]}
              placeholder={imageOnlinePlayground}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>About the project</ProjectSectionHeading>
            <ProjectSectionText>
              While I was learning the web technologies, I started with HTML, CSS ang
              Javascript basics and was practising on different playground tools available
              online. I was impressed that they are good as they give the result online so
              simply. I just want to know how this was created and I tried to make it on
              my own. So I made this basic online playground as a small project and
              deployed it.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={[imageOnlinePlaygroundEditor]}
              placeholder={imageOnlinePlaygroundEditor}
              alt={`A set of ${themeId} themed components for the online code editor`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>What playground can do?</ProjectSectionHeading>
              <ProjectSectionText>
                Playground has the complete functionality to edit HTML, CSS and Javascript
                code. You can view the instant display of output without any page refresh.
                The code renders in real time, no upload or download is required. It is
                fast, secure, basic but a powerful tool to render these technologies
                efficiently.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={[{ src: videoMarkdownDemo, width: 768 }]}
              placeholder={onlineMarkdownEditor}
              alt="The markdown editor live preview to HTML code"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Online Markdown Editor</ProjectSectionHeading>
              <ProjectSectionText>
                Markdown editor is useful to view the markdown text into HTML online fast.
                User can practice different functionality available for the Markdown text
                like list items, headings, font styles, download file, hot reload without
                refresh, insert link, insert image etc
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Markdown Editor at Play</ProjectSectionHeading>
                  <ProjectSectionText>
                    See the robust Markdown text to HTML in action. Fast as it and secure
                    without any installation. No need to download any software.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[{ src: videoMarkdownDemo, width: 1280 }]}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Encouraging adaptivity</ProjectSectionHeading>
              <ProjectSectionText>
                A major part of developing this platform was being able to visualize the
                learner experience in the editor. This was especially beneficial for
                beginners and instructors need to review and give feedback on the higher
                level structure without having to dig through all of the scenarios file by
                file or by looking at folders.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={[{ src: videoHTMLCodeEditor, width: 1280 }]}
              placeholder={videoHTMLCodeEditor}
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Project is successfully deployed at{' '}
                <Link href="/projects/editor">MDX Playground</Link> Check it out, express
                your thoughts!
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
