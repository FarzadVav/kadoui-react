"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronRightIcon,
  EyeClosedIcon,
  EyeIcon,
  FlagIcon,
  FlameIcon,
  GridIcon,
  HashIcon,
  InfoIcon,
  ListTodoIcon,
  LoaderIcon,
  LockIcon,
  Moon,
  RefreshCwIcon,
  SearchIcon,
  StarIcon,
  SunIcon,
  TrashIcon,
  VenusIcon,
} from "lucide-react";

import { formatInput } from "@kadoui/react/utils";
import {
  Tabs,
  Swap,
  Slide,
  Sheet,
  Modal,
  Drawer,
  QrCode,
  Rating,
  Spoiler,
  Dropdown,
  Carousel,
  ShowMore,
  Progress,
  addToast,
  Accordion,
  Clipboard,
  ClientOnly,
  ContextMenu,
  Breadcrumbs,
  PasswordInput,
  StepsWithState,
  AccessNavigation,
  PaginationWithState,
  StepsWithSearchParams,
  PaginationWithSearchParams,
  Otp,
  LoaderLink
} from "@kadoui/react";

const FORMS_1 = [
  {
    name: "Hello world",
    component: (
      <>
        <p>
          One: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>

        <AccessNavigation className="f-center gap-3 mt-3" direction="x">
          <StepsWithState.PrevBtn className="btn-fill" />
          <StepsWithState.NextBtn className="btn-fill" />
        </AccessNavigation>
      </>
    ),
  },
  {
    name: "Beauty game",
    component: (
      <>
        <p>
          Two: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>

        <AccessNavigation className="f-center gap-3 mt-3" direction="x">
          <StepsWithState.PrevBtn className="btn-fill" />
          <StepsWithState.NextBtn className="btn-fill" />
        </AccessNavigation>
      </>
    ),
  },
];
const FORMS_2 = [
  {
    name: "Hello world",
    component: (
      <>
        <p>
          One: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>

        <AccessNavigation className="f-center gap-3 mt-3" direction="x">
          <StepsWithSearchParams.PrevBtn className="btn-fill" />
          <StepsWithSearchParams.NextBtn className="btn-fill" />
        </AccessNavigation>
      </>
    ),
  },
  {
    name: "Beauty game",
    component: (
      <>
        <p>
          Two: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>

        <AccessNavigation className="f-center gap-3 mt-3" direction="x">
          <StepsWithSearchParams.PrevBtn className="btn-fill" />
          <StepsWithSearchParams.NextBtn className="btn-fill" />
        </AccessNavigation>
      </>
    ),
  },
  {
    name: "Finish",
    component: (
      <>
        <p>
          Two: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>

        <AccessNavigation className="f-center gap-3 mt-3" direction="x">
          <StepsWithSearchParams.PrevBtn className="btn-fill" />
          <StepsWithSearchParams.NextBtn className="btn-fill" />
        </AccessNavigation>
      </>
    ),
  },
];

function Page() {
  const [activeTab, setActiveTab] = useState("1");
  const [username, setUsername] = useState("");
  const [starRating, setStarRating] = useState(3);
  const [starRating2, setStarRating2] = useState(1);

  return (
    <div className="container my-4 space-y-3">
      <div className="f-align gap-3">
        <p className="badge badge-sm">
          <HashIcon className="compatible-icon" />
          <span>Badge 1</span>
        </p>
        <p className="badge">
          <HashIcon className="compatible-icon" />
          <span>Badge 2</span>
        </p>
        <p className="badge badge-lg">
          <HashIcon className="compatible-icon" />
          <span>Badge 3</span>
        </p>
      </div>

      <div className="f-align gap-3 relative">
        <div className="popover-group">
          <div className="popover popover-b max-w-32">
            <p className="popover-content popover-content-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              assumenda.
            </p>
          </div>

          <button
            className="btn-fill btn-sm"
            onClick={() =>
              addToast({
                data: "Toast Title",
                variant: "toast-glass",
                size: "toast-sm",
                status: "success",
              })
            }
          >
            <span>Click 1</span>
          </button>
        </div>

        <div className="popover-group palette-success">
          <div className="popover popover-b max-w-40">
            <p className="popover-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              assumenda.
            </p>
          </div>

          <button
            className="btn-fill"
            onClick={() =>
              addToast({
                data: "Toast Title",
                variant: "toast-glass",
                status: "success",
              })
            }
          >
            <span>Click 2</span>
          </button>
        </div>

        <div className="popover-group palette-foreground">
          <div className="popover popover-b max-w-64">
            <p className="popover-content popover-content-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              assumenda.
            </p>
          </div>

          <button
            className="btn-fill btn-lg"
            onClick={() =>
              addToast({
                data: "Toast Title",
                variant: "toast-glass",
                size: "toast-lg",
                status: "success",
              })
            }
          >
            <span>Click 3</span>
          </button>
        </div>
      </div>

      <div className="p-6 h-96 bg-foreground mt-6">
        <div className="popover-group palette-background">
          <div className="popover popover-b w-full">
            <p className="popover-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              assumenda.
            </p>
          </div>

          <button className="btn-fill">FILL BACKGROUND</button>
        </div>
      </div>

      <div className="f-align gap-3 mt-6">
        <button className="btn-outline">OUTLINE</button>
        <button className="btn-soft">SOFT</button>
        <button className="btn-ghost">GHOST</button>
      </div>

      <div className="space-y-6 separate-y">
        <label className="input-ghost">
          <ListTodoIcon className="compatible-icon" />
          <select className="input-field" defaultValue={"1"}>
            <option value="1">Choose your wh</option>
            <option value="2">Why</option>
            <option value="3">Where</option>
            <option value="4">Who</option>
          </select>
        </label>

        <div className="w-full overflow-hidden space-y-6 pt-6 pr-6">
          <label className="input-outline input-sm" htmlFor="input-1">
            <span className="indicator-tr indicator-sm">33</span>
            <SearchIcon className="compatible-icon" />
            <input
              type="text"
              id="input-1"
              name="input-1"
              className="input-field"
              placeholder="Search something 1..."
              onChange={(ev) => {
                ev.target.value = formatInput(
                  ev.target.value,
                  /^[0-9\u06F0-\u06F9]*$/,
                );
              }}
            />
            <p>Do it.</p>
          </label>

          <label className="input-soft input" htmlFor="input-3">
            <span className="indicator-tr indicator">33</span>
            <SearchIcon className="compatible-icon" />
            <input
              className="input-field"
              type="text"
              name="input-3"
              id="input-3"
              placeholder="Search something 3..."
            />
          </label>

          <PasswordInput className="input-outline" htmlFor="password-input">
            <span className="indicator-tr indicator-lg">33</span>
            <LockIcon className="compatible-icon" />
            <PasswordInput.Field
              id="password-input"
              className="input-field"
              placeholder="Your safe password"
            />
            <PasswordInput.Toggle className="btn btn-sm btn-square" visibleChildren={<EyeIcon className="compatible-icon" />}>
              <EyeClosedIcon className="compatible-icon" />
            </PasswordInput.Toggle>
          </PasswordInput>
        </div>

        <AccessNavigation className="f-align gap-3" direction="x">
          <Otp className="otp">
            <Otp.Inputs className="input-outline input-square text-center" length={4} onLastChange={(otp) => console.log(otp)} />
            <Otp.HiddenInput />
          </Otp>
        </AccessNavigation>
      </div>

      <AccessNavigation className="menu-y menu-lg relative">
        <button className="btn-fill btn-lg">Lorem, ipsum dolor</button>
        <button className="btn-outline btn-lg">Lorem, ipsum dolor 1</button>
        <button className="btn-soft btn-lg">Lorem, ipsum dolor 2</button>
        <button className="btn-ghost btn-lg">Lorem, ipsum dolor 3</button>
      </AccessNavigation>

      <div className="f-align gap-3">
        <div className="bg-background-thick avatar avatar-sm" />
        <div className="bg-background-thick avatar" />
        <div className="bg-background-thick avatar avatar-lg" />
      </div>

      <div className="f-align max-sm:flex-col gap-3">
        <p>
          Press <span className="kbd kbd-sm">Ctrl</span> +{" "}
          <span className="kbd kbd-sm">Alt</span> +{" "}
          <span className="kbd kbd-sm">T</span> for new tab.
        </p>
        <p>
          Press <span className="kbd">Ctrl</span> +{" "}
          <span className="kbd">Alt</span> + <span className="kbd">T</span> for
          new tab.
        </p>
        <p>
          Press <span className="kbd kbd-lg">Ctrl</span> +{" "}
          <span className="kbd kbd-lg">Alt</span> +{" "}
          <span className="kbd kbd-lg">T</span> for new tab.
        </p>
      </div>

      {Array.from({ length: 10 }).map((_, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          beatae exercitationem fugit officiis, quisquam nostrum, sequi commodi
          atque porro quibusdam quo animi repellendus! Ipsa nostrum quae eaque
          modi necessitatibus laboriosam!
        </p>
      ))}

      <ClientOnly>
        <Slide>
          <Slide.Toggle className="btn-fill palette-foreground">
            Open a slide!
          </Slide.Toggle>

          <Slide.Portal className="slide-portal">
            <Slide.Header className="slide-header">
              <div className="container">
                <Slide.Toggle className="btn-fill palette-foreground">
                  Close slide
                </Slide.Toggle>
              </div>
            </Slide.Header>

            <Slide.Body className="slide-body">
              <div className="container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime repellendus numquam repellat in asperiores, harum quo
                  eum placeat veritatis reprehenderit provident aut, modi
                  temporibus earum qui eos doloremque. Error ducimus maiores
                  sed! Totam fugiat ex accusamus sed, illo animi magni,
                  excepturi facilis mollitia velit, provident nihil quo dolorem
                  sint. Ratione eum, veniam ullam, qui blanditiis dolore
                  exercitationem, adipisci recusandae sint nihil laudantium.
                  Porro repellat, autem incidunt quisquam dolor voluptas nisi,
                  ipsam dicta laborum ratione eius ex iste repudiandae
                  recusandae voluptatem assumenda nobis pariatur aliquam illo
                  blanditiis. Odio iste placeat incidunt amet magnam, ipsam, at
                  ratione voluptate animi maiores repellat ullam.
                </p>
              </div>
            </Slide.Body>
          </Slide.Portal>
        </Slide>
      </ClientOnly>

      <div className="separate-y palette-foreground">
        <Sheet>
          <Sheet.Toggle className="btn-fill">
            Open sheet
          </Sheet.Toggle>

          <Sheet.Portal className="sheet-portal">
            <Sheet.Body className="sheet-body">
              <Sheet.Header className="sheet-header text-center font-bold">
                Pick your subscription
              </Sheet.Header>
              <Sheet.Content className="sheet-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi velit eligendi, consequuntur commodi dicta
                  laboriosam neque sunt incidunt modi odit eum eos enim non
                  inventore accusantium est nisi soluta distinctio quibusdam
                  pariatur tempore ullam deleniti dolor? Iusto totam sunt saepe
                  quidem dolor vero voluptatibus soluta maiores error recusandae
                  commodi, assumenda quaerat maxime adipisci unde veritatis rem
                  dolore. Eos nisi vitae odio accusamus eaque quis debitis
                  expedita quisquam reprehenderit assumenda repellat perferendis
                  ratione ad qui dignissimos corrupti nemo, doloremque
                  recusandae tempore quos placeat possimus aliquid! Amet
                  eligendi delectus ipsum quis ratione nisi magnam ducimus
                  soluta est unde, necessitatibus, perspiciatis expedita ullam
                  veritatis minima incidunt fuga temporibus. Minima expedita
                  nisi praesentium iste. Eius dignissimos veniam error dolores
                  quis, voluptas assumenda facere nobis vitae. Eaque asperiores
                  corporis molestias aliquam reiciendis esse harum incidunt iure
                  adipisci quas quae quisquam odio similique sequi, sapiente ut
                  optio dignissimos. Ut rem provident sint dolores aperiam,
                  eius, tenetur dolorum excepturi placeat cumque, consequatur
                  ipsa rerum quam omnis explicabo est optio natus. In excepturi
                  quisquam praesentium corrupti saepe ad iusto, atque soluta
                  eaque voluptate voluptates, vel minus suscipit, deserunt quos
                  explicabo labore vitae facilis minima. Eum deleniti voluptates
                  ex, ratione, itaque sunt atque officia enim provident
                  doloribus nobis ipsam.
                </p>

                <Sheet.Toggle className="btn-fill w-full">
                  I got it!
                </Sheet.Toggle>
              </Sheet.Content>
            </Sheet.Body>
          </Sheet.Portal>
        </Sheet>
      </div>

      <Link className="mt-6 btn-fill w-fit" href={"/test"}>
        <span>Dashboard</span>
        <LoaderLink loader={<LoaderIcon className="compatible-icon animate-spin" />}>
          <GridIcon className="compatible-icon" />
        </LoaderLink>
      </Link>

      <AccessNavigation className="separate-t">
        <Accordion>
          <Accordion.Toggle className="btn-fill group/accordion">
            <ChevronRightIcon className="compatible-icon transition-transform group-[.accordion-active]/accordion:rotate-90" />
            <span>components</span>
          </Accordion.Toggle>

          <Accordion.Body className="accordion-body">
            <Accordion>
              <div className="pl-3 pt-3">
                <Accordion.Toggle className="btn-ghost">ui</Accordion.Toggle>
              </div>

              <Accordion.Body>
                <p className="pl-6 pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  similique fugit eligendi soluta nam, doloribus esse, illum eos
                  rerum vitae quod, mollitia veniam reprehenderit adipisci
                  quisquam corrupti blanditiis perferendis enim.
                </p>
              </Accordion.Body>
            </Accordion>

            <p className="pl-3 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              similique fugit eligendi soluta nam, doloribus esse, illum eos
              rerum vitae quod, mollitia veniam reprehenderit adipisci quisquam
              corrupti blanditiis perferendis enim.
            </p>
          </Accordion.Body>
        </Accordion>

        <Accordion>
          <Accordion.Toggle className="btn-fill group/accordion mt-3">
            <ChevronRightIcon className="compatible-icon transition-transform group-[.accordion-active]/accordion:rotate-90" />
            <span>hooks</span>
          </Accordion.Toggle>

          <Accordion.Body>
            <p className="pl-3 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              similique fugit eligendi soluta nam, doloribus esse, illum eos
              rerum vitae quod, mollitia veniam reprehenderit adipisci quisquam
              corrupti blanditiis perferendis enim.
            </p>
          </Accordion.Body>
        </Accordion>

        <Accordion>
          <Accordion.Toggle className="btn-fill group/accordion mt-3">
            <ChevronRightIcon className="compatible-icon transition-transform group-[.accordion-active]/accordion:rotate-90" />
            <span>utils</span>
          </Accordion.Toggle>
          <Accordion.Body>
            <p className="pl-3 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              similique fugit eligendi soluta nam, doloribus esse, illum eos
              rerum vitae quod, mollitia veniam reprehenderit adipisci quisquam
              corrupti blanditiis perferendis enim.
            </p>
          </Accordion.Body>
        </Accordion>
      </AccessNavigation>

      <QrCode
        options={{ width: 200 }}
        value="https://nextjs.org"
        className="rounded-kado shadow hover:shadow-lg transition-shadow"
      />

      <div className="separate-y">
        <PaginationWithState pageLength={5}>
          <AccessNavigation className="f-align gap-3" direction="x">
            <PaginationWithState.PrevBtn className="btn-fill">
              Prev
            </PaginationWithState.PrevBtn>
            <PaginationWithState.Counts />
            <PaginationWithState.NextBtn className="btn-fill">
              Next
            </PaginationWithState.NextBtn>
          </AccessNavigation>
        </PaginationWithState>
      </div>

      <div className="separate-y">
        <Suspense>
          <PaginationWithSearchParams pageLength={5}>
            <AccessNavigation className="f-align gap-3" direction="x">
              <PaginationWithSearchParams.PrevBtn className="btn-fill">
                Prev
              </PaginationWithSearchParams.PrevBtn>
              <PaginationWithSearchParams.Counts />
              <PaginationWithSearchParams.NextBtn className="btn-fill">
                Next
              </PaginationWithSearchParams.NextBtn>
            </AccessNavigation>
          </PaginationWithSearchParams>
        </Suspense>
      </div>

      <div className="w-96 max-w-full separate-t">
        <StepsWithState steps={FORMS_1}>
          <StepsWithState.Controls />
        </StepsWithState>
      </div>

      <div className="w-96 max-w-full separate-t">
        <Suspense>
          <StepsWithSearchParams steps={FORMS_2}>
            <StepsWithSearchParams.Controls />
          </StepsWithSearchParams>
        </Suspense>
      </div>

      <div className="f-align gap-1.5 mt-6">
        <label className="input-outline">
          <input
            type="text"
            className="input-field"
            placeholder="Your username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </label>
        <div className="popover-group">
          <div className="popover popover-tr">
            <p className="popover-content popover-content-sm">
              {username}
            </p>
          </div>

          <Clipboard className="btn-fill" text={username} copiedChildren={<span>Copied</span>}>
            <span>Copy</span>
          </Clipboard>
        </div>
      </div>

      <Modal>
        <Modal.Toggle className="btn-fill mt-6">Open modal {":)"}</Modal.Toggle>

        <Modal.Portal className="modal-portal">
          <Modal.Body className="modal-body">
            <Modal.Header className="modal-header">
              <p className="font-bold text-xl text-center w-full">
                Select your girl:
              </p>
            </Modal.Header>
            <Modal.Content className="modal-content space-y-3">
              <label className="input-outline">
                <input
                  type="text"
                  data-modal="index"
                  className="input-field"
                  placeholder="Search by name"
                />
              </label>

              <div className="f-align gap-3">
                <VenusIcon className="icon-size-3" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, deleniti!
                </p>
              </div>
              <div className="f-align gap-3">
                <VenusIcon className="icon-size-3" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, deleniti!
                </p>
              </div>
              <div className="f-align gap-3">
                <VenusIcon className="icon-size-3" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, deleniti!
                </p>
              </div>

              <p className="max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis voluptatem provident voluptas voluptatibus, iure
                neque ex impedit laudantium repellat veritatis corporis fugit
                totam, illo quaerat blanditiis! Voluptatem optio, quaerat modi
                molestiae exercitationem alias nobis enim voluptate tempore amet
                dolorum! At praesentium nemo, porro culpa corporis reiciendis et
                nisi labore ea incidunt possimus aut laboriosam velit excepturi
                est sapiente alias a quisquam nobis veritatis perferendis nam.
                Saepe ut facilis debitis architecto perspiciatis! Possimus
                accusamus ea quam dicta rem unde iusto quo quibusdam minima a,
                optio suscipit ipsa soluta iste sequi adipisci molestiae.
                Reiciendis reprehenderit in tempora ullam aliquam suscipit
                inventore voluptas!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates accusamus esse, cum necessitatibus ut illo nostrum
                atque minus. Quae sit sequi rem? Quas nostrum voluptas eligendi
                aspernatur fuga ab voluptates consequuntur aut, architecto,
                nobis blanditiis delectus unde velit corporis libero ratione,
                vel explicabo! Commodi blanditiis fugiat fuga! Ad, quam!
                Inventore officia repellendus, nesciunt dolor nobis consectetur
                cum. Incidunt a atque nobis amet corporis quas placeat, deleniti
                unde quasi soluta ab sit suscipit facere totam consequuntur ea
                odio ipsa? Aliquam necessitatibus nesciunt veritatis!
                Voluptatibus nulla non maiores magni consectetur commodi aliquam
                nemo sapiente, dicta voluptatum quis, cumque, praesentium nisi
                ipsa? Eaque, earum ducimus quisquam odit blanditiis repellendus
                ipsam quam alias dolorem!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                minima cum ad magnam, omnis quia explicabo tempora reiciendis
                tenetur adipisci rerum maxime voluptatum similique esse itaque
                atque quae veritatis accusamus obcaecati, repellat accusantium.
                Enim a quae temporibus veniam dignissimos omnis in neque
                doloremque soluta commodi saepe aspernatur magni nemo libero
                ipsum cumque, explicabo sint impedit atque, nostrum ex
                perferendis eligendi! Sed necessitatibus iusto et sequi minus
                praesentium. Numquam accusantium nobis itaque qui neque
                consequatur! Animi quaerat reiciendis assumenda nostrum eveniet
                qui saepe, cupiditate sunt? Beatae expedita corporis adipisci
                sit atque quos eum magnam perferendis temporibus accusantium
                aut, deserunt iste repellat, optio voluptate voluptatum debitis
                dolor, labore vitae ex commodi ea nisi. Asperiores culpa hic
                consequatur, voluptatibus, architecto tempora aperiam recusandae
                porro, nesciunt veniam voluptas consequuntur quae odit? Quod est
                neque accusamus asperiores obcaecati quisquam! Maxime ratione
                deleniti ut, itaque perferendis beatae quod dolores voluptate
                laboriosam omnis impedit corrupti earum! Repudiandae quis sint
                sequi, inventore quas iste eveniet, veritatis, quasi facere
                officiis tenetur provident perferendis eos doloremque?
                Exercitationem voluptatibus quod ut a quae perspiciatis itaque,
                iste consequuntur, tempora ea laboriosam laudantium odit eum rem
                accusamus voluptatem odio illum impedit labore enim, facilis
                incidunt in animi consectetur! Facere consequuntur repellendus
                quia in?
              </p>

              <Modal.Toggle className="btn-fill mx-auto mt-6">
                <CheckIcon className="compatible-icon" />
                <span>I got it</span>
              </Modal.Toggle>
            </Modal.Content>
          </Modal.Body>
        </Modal.Portal>
      </Modal>

      <AccessNavigation>
        <Dropdown className="dropdown mt-6 palette-foreground">
          <Dropdown.Toggle className="btn-fill">Dropdown!</Dropdown.Toggle>
          <Dropdown.Menu preventClose className="dropdown-menu popover popover-b">
            <div className="menu-y">
              <button className="btn-ghost">Item is here</button>
              <Dropdown accessHorizontalArrows="ArrowRight">
                <Dropdown.Toggle className="btn-ghost">
                  <span>Item two</span>
                  <ChevronRightIcon className="compatible-icon" />
                </Dropdown.Toggle>
                <Dropdown.Menu preventClose className="popover popover-r">
                  <div className="menu-y shadow">
                    <button className="btn-ghost">Child 1</button>
                    <button className="btn-ghost">Child 2</button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <button className="btn-ghost">Item for 3</button>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </AccessNavigation>

      <p className="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, error
        cum nostrum libero iusto, nam laudantium debitis sed perferendis optio
        nulla totam <Spoiler className="spoiler"><Spoiler.Blur className="spoiler-blur">explicabo distinctio quis</Spoiler.Blur></Spoiler> delectus rem
        culpa commodi quos!
      </p>

      <div className="separate-y">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
          <AccessNavigation direction="x">
            <Tabs.List>
              <Tabs.Tab
                className={activeTab === "1" ? "btn-fill" : "btn-soft"}
                value="1"
              >
                Tab 1
              </Tabs.Tab>
              <Tabs.Tab
                className={activeTab === "2" ? "btn-fill" : "btn-soft"}
                value="2"
              >
                Tab 2
              </Tabs.Tab>
              <Tabs.Tab
                className={activeTab === "3" ? "btn-fill" : "btn-soft"}
                value="3"
              >
                Tab 3
              </Tabs.Tab>
            </Tabs.List>
          </AccessNavigation>

          <Tabs.Panel key={"1"} value="1">
            Tab 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, animi nisi, magni quis dolore cum molestias ipsam
            accusantium sunt repudiandae repellendus perspiciatis cumque unde
            commodi reprehenderit distinctio nostrum quisquam nihil?
          </Tabs.Panel>

          <Tabs.Panel key={"2"} value="2">
            Tab 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, animi nisi, magni quis dolore cum molestias ipsam
            accusantium sunt repudiandae quisquam nihil?
          </Tabs.Panel>

          <Tabs.Panel key={"3"} value="3">
            Tab 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, animi nisi, magni quis dolore cum molestias ipsam
            accusantium sunt repudiandae repellendus perspiciatis cumque unde
            commodi reprehenderit distinctio nostrum quisquam nihil?
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut
            corporis sequi expedita deserunt aliquid iste facere, nisi ipsa iure
            ad nostrum animi. Adipisci placeat eos laborum error magnam officiis
            necessitatibus illo commodi a, aperiam tempora alias voluptatum
            eveniet, atque quas dolores, facilis architecto quisquam ipsum
            dolore officia debitis facere! Dicta iste consectetur, illo amet
            obcaecati aut error, ipsam optio at earum odio laudantium
            voluptatibus? Nemo, nisi debitis et, nam voluptas tempora ipsa ipsum
            culpa nobis perferendis ipsam cumque blanditiis quos corrupti, rerum
            eos? Sapiente fugiat voluptatibus laborum culpa at. Quidem, suscipit
            perferendis. Illum doloribus in cumque fuga laboriosam dignissimos!
          </Tabs.Panel>
        </Tabs>
      </div>

      <ContextMenu className="h-32 w-96 max-w-full relative border-4 border-dashed border-primary/10 mt-6">
        <span className="absolute inset-center">Context menu!</span>

        <ContextMenu.Content className="context-menu-content">
          <AccessNavigation className="menu-y palette-foreground">
            <button className="btn-ghost">
              <TrashIcon className="compatible-icon" />
              <span>DELETE</span>
            </button>
            <button className="btn-ghost">
              <RefreshCwIcon className="compatible-icon" />
              <span>RELOAD</span>
            </button>
            <button className="btn-ghost">
              <FlagIcon className="compatible-icon" />
              <span>IGNORE IT</span>
            </button>
          </AccessNavigation>
        </ContextMenu.Content>
      </ContextMenu>

      <Carousel className="carousel mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />

          {Array.from({ length: 12 }).map(() => (
            <div
              className="w-[90%] min-w-[90%] sm:w-2/5 sm:min-w-2/5"
              key={Math.random()}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto magni et, maiores eaque dolor libero voluptas totam
              necessitatibus earum non ipsum blanditiis repellat recusandae
              aliquid doloremque voluptates dolores modi vero maxime nemo ad
              aperiam cumque esse. Modi, minima? Aut aliquid voluptate atque
              blanditiis ex laborum tempora laboriosam libero error, voluptatum
              nam ipsam, sapiente distinctio tenetur dicta quaerat numquam sint
              architecto quae officiis ab est temporibus excepturi voluptatibus?
              Iste ullam quod molestias facilis quisquam aliquid ad! Dolore iure
              voluptatum dicta aliquid nulla at libero! Temporibus molestiae
              eligendi eius voluptate quas necessitatibus ducimus rerum vero
              iure dicta? Esse fugiat quam nostrum? Quo.
            </div>
          ))}

          <Carousel.RightFade className="carousel-right-fade" />
        </Carousel.Container>
      </Carousel>

      <div className="separate-y">
        <Rating className="rating">
          <Rating.Items
            count={5}
            value={starRating}
            className="rating-items"
            onValueChange={setStarRating}
            element={
              <StarIcon className="icon-size-5 color-foreground rounded-full" />
            }
            activeElement={
              <StarIcon className="icon-size-5 fill-foreground color-background rounded-full" />
            }
          />
        </Rating>

        <Rating className="rating mt-3">
          <Rating.Items
            count={7}
            value={starRating2}
            className="rating-items"
            onValueChange={setStarRating2}
            element={
              <div className="icon-size-5 bg-foreground/50 rounded-full" />
            }
            activeElement={
              <div className="icon-size-5 bg-foreground rounded-full" />
            }
          />
        </Rating>
      </div>

      <div className="table-container">
        <table className="table-main">
          <caption className="table-main-caption">
            <h6>Our products</h6>
            <p>
              Browse a list of Flowbite products designed to help you work and
              play, stay organized, get answers, keep in touch, grow your
              business, and more.
            </p>
          </caption>
          <thead className="table-main-head">
            <tr>
              <th>Product name</th>
              <th>Color</th>
              <th>Category</th>
              <th>Price</th>
              <th>
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 3 }).map(() => (
              <tr key={Math.random()} className="table-main-row">
                <td>Apple MacBook Pro 17</td>
                <td>Silver</td>
                <td>Laptop</td>
                <td>$2999</td>
                <td>
                  <Link href="" className="text-primary btn-link">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ShowMore className="max-w-xl mt-6" maxLines={2}>
        <ShowMore.Content className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Sit magni nisi nobis et magnam perspiciatis facere
          nulla aspernatur possimus dolores. Ipsa, atque quaerat incidunt nobis
          voluptates, tempora laborum dolor minima sequi error veritatis ducimus
          ipsum. Excepturi assumenda repellat omnis hic repudiandae ratione
          vitae iste nulla cumque maxime aspernatur possimus laboriosam
          obcaecati debitis officia animi, voluptates reprehenderit suscipit
          nisi et quis. Itaque, recusandae rem expedita aspernatur vel non nemo
          vitae saepe pariatur quidem ipsum cupiditate veniam inventore
          similique explicabo molestias minima fugit provident facilis deserunt
          blanditiis dolore id! Animi expedita asperiores aperiam, totam,
          ratione quibusdam ducimus iusto illum deserunt sequi facere.
        </ShowMore.Content>

        <ShowMore.Fade className="show-more-fade" />

        <ShowMore.Trigger className="btn-fill mt-3">Show more</ShowMore.Trigger>
      </ShowMore>

      <div className="separate-y">
        <Swap items={["1", "2", "3"]}>
          <Swap.Trigger className="btn-fill" item="1">
            <Swap.Item>
              <SunIcon />
            </Swap.Item>
          </Swap.Trigger>

          <Swap.Trigger className="btn-fill" item="2">
            <Swap.Item>
              <Moon />
            </Swap.Item>
          </Swap.Trigger>

          <Swap.Trigger className="btn-fill" item="3">
            <Swap.Item>
              <FlameIcon />
            </Swap.Item>
          </Swap.Trigger>
        </Swap>
      </div>

      <input type="range" className="h-2 mt-6 slider" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="card card-pure">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          libero quia autem corrupti nostrum neque porro nobis!
        </div>
        <div className="card card-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          libero quia autem corrupti nostrum neque porro nobis!
        </div>
        <div className="card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          libero quia autem corrupti nostrum neque porro nobis!
        </div>
        <div className="card card-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          libero quia autem corrupti nostrum neque porro nobis!
        </div>
      </div>

      <div className="alert alert-lg palette-danger mt-3">
        <InfoIcon className="compatible-icon" />
        <span>Oops, something went wrong. Try again.</span>
      </div>

      <AccessNavigation direction="x" className="mt-6">
        <Breadcrumbs
          className="breadcrumbs palette-foreground"
          separator={<ArrowRightIcon className="icon-size-1" />}
        >
          <Breadcrumbs.Item className="breadcrumbs-item">
            <Link href="" className="btn-ghost btn-link">
              Home
            </Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item className="breadcrumbs-item">
            <Link href="" className="btn-ghost btn-link">
              Products
            </Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item className="breadcrumbs-item">
            <Link href="" className="btn-ghost btn-link">
              Electronics
            </Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item isLast>
            <span className="font-bold">Smartphones</span>
          </Breadcrumbs.Item>
        </Breadcrumbs>
      </AccessNavigation>

      <Progress className="progress" value={75}>
        <Progress.Bar className="progress-bar" />
      </Progress>

      <div className="alert alert-sm mt-6">
        <InfoIcon className="compatible-icon" />
        <span>Oops, something went wrong. Try again.</span>
      </div>

      <div className="alert palette-foreground mt-3">
        <InfoIcon className="compatible-icon" />
        <span>Oops, something went wrong. Try again.</span>
      </div>

      <div className="alert palette-success mt-3">
        <InfoIcon className="compatible-icon" />
        <span>Oops, something went wrong. Try again.</span>
      </div>

      <div className="alert palette-warning mt-3">
        <InfoIcon className="compatible-icon" />
        <span>Oops, something went wrong. Try again.</span>
      </div>

      <Drawer>
        <Drawer.Toggle className="btn-fill mt-6">
          Open Drawer {":)"}
        </Drawer.Toggle>

        <Drawer.Portal className="drawer-portal">
          <Drawer.Body className="drawer-body space-y-3" position="bottom">
            <label className="input-outline">
              <input
                type="text"
                data-drawer="index"
                className="input-field"
                placeholder="Search by name"
              />
            </label>

            <div className="f-align gap-3">
              <VenusIcon className="icon-size-3" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, deleniti!
              </p>
            </div>
            <div className="f-align gap-3">
              <VenusIcon className="icon-size-3" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, deleniti!
              </p>
            </div>
            <div className="f-align gap-3">
              <VenusIcon className="icon-size-3" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, deleniti!
              </p>
            </div>

            <p className="max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis voluptatem provident voluptas voluptatibus, iure
              neque ex impedit laudantium repellat veritatis corporis fugit
              totam, illo quaerat blanditiis! Voluptatem optio, quaerat modi
              molestiae exercitationem alias nobis enim voluptate tempore amet
              dolorum! At praesentium nemo, porro culpa corporis reiciendis et
              nisi labore ea incidunt possimus aut laboriosam velit excepturi
              est sapiente alias a quisquam nobis veritatis perferendis nam.
              Saepe ut facilis debitis architecto perspiciatis! Possimus
              accusamus ea quam dicta rem unde iusto quo quibusdam minima a,
              optio suscipit ipsa soluta iste sequi adipisci molestiae.
              Reiciendis reprehenderit in tempora ullam aliquam suscipit
              inventore voluptas!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates accusamus esse, cum necessitatibus ut illo nostrum
              atque minus. Quae sit sequi rem? Quas nostrum voluptas eligendi
              aspernatur fuga ab voluptates consequuntur aut, architecto, nobis
              blanditiis delectus unde velit corporis libero ratione, vel
              explicabo! Commodi blanditiis fugiat fuga! Ad, quam! Inventore
              officia repellendus, nesciunt dolor nobis consectetur cum.
              Incidunt a atque nobis amet corporis quas placeat, deleniti unde
              quasi soluta ab sit suscipit facere totam consequuntur ea odio
              ipsa? Aliquam necessitatibus nesciunt veritatis! Voluptatibus
              nulla non maiores magni consectetur commodi aliquam nemo sapiente,
              dicta voluptatum quis, cumque, praesentium nisi ipsa? Eaque, earum
              ducimus quisquam odit blanditiis repellendus ipsam quam alias
              dolorem!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              minima cum ad magnam, omnis quia explicabo tempora reiciendis
              tenetur adipisci rerum maxime voluptatum similique esse itaque
              atque quae veritatis accusamus obcaecati, repellat accusantium.
              Enim a quae temporibus veniam dignissimos omnis in neque
              doloremque soluta commodi saepe aspernatur magni nemo libero ipsum
              cumque, explicabo sint impedit atque, nostrum ex perferendis
              eligendi! Sed necessitatibus iusto et sequi minus praesentium.
              Numquam accusantium nobis itaque qui neque consequatur! Animi
              quaerat reiciendis assumenda nostrum eveniet qui saepe, cupiditate
              sunt? Beatae expedita corporis adipisci sit atque quos eum magnam
              perferendis temporibus accusantium aut, deserunt iste repellat,
              optio voluptate voluptatum debitis dolor, labore vitae ex commodi
              ea nisi. Asperiores culpa hic consequatur, voluptatibus,
              architecto tempora aperiam recusandae porro, nesciunt veniam
              voluptas consequuntur quae odit? Quod est neque accusamus
              asperiores obcaecati quisquam! Maxime ratione deleniti ut, itaque
              perferendis beatae quod dolores voluptate laboriosam omnis impedit
              corrupti earum! Repudiandae quis sint sequi, inventore quas iste
              eveniet, veritatis, quasi facere officiis tenetur provident
              perferendis eos doloremque? Exercitationem voluptatibus quod ut a
              quae perspiciatis itaque, iste consequuntur, tempora ea laboriosam
              laudantium odit eum rem accusamus voluptatem odio illum impedit
              labore enim, facilis incidunt in animi consectetur! Facere
              consequuntur repellendus quia in?
            </p>

            <Drawer.Toggle className="btn-fill mx-auto mt-6">
              <CheckIcon className="compatible-icon" />
              <span>I got it</span>
            </Drawer.Toggle>
          </Drawer.Body>
        </Drawer.Portal>
      </Drawer>
    </div>
  );
}

export default Page;
