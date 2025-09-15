"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyCheckIcon,
  CopyIcon,
  EyeClosedIcon,
  EyeIcon,
  FlagIcon,
  RefreshCwIcon,
  TrashIcon,
} from "lucide-react";
import {
  AccessNavigation,
  Accordion,
  Breadcrumbs,
  Carousel,
  ClientOnly,
  Clipboard,
  ContextMenu,
  Drawer,
  Modal,
  Otp,
  PaginationWithSearchParams,
  PaginationWithState,
  PasswordInput,
} from "@kadoui/react";

function Page() {
  return (
    <div className="container my-20">
      <p className="heading">AccessNavigation</p>
      <AccessNavigation
        direction="x"
        className="join mt-6">
        <button className="btn btn-soft">One</button>
        <button className="btn btn-soft">Two</button>
        <button className="btn btn-soft">Three</button>
        <button className="btn btn-soft">Four</button>
      </AccessNavigation>

      <p className="heading mt-20">Accordion</p>
      <Accordion>
        <Accordion.Toggle className="btn btn-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
          <span>Open accordion</span>
          <ChevronDownIcon className="transition-transform btn-icon-size group-data-[state=true]:-scale-y-100" />
        </Accordion.Toggle>
        <Accordion.Body>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus
            unde, repellendus dolores, fuga nam commodi sapiente omnis voluptatum error
            earum culpa asperiores eaque ea enim possimus vero esse!
          </p>
        </Accordion.Body>
      </Accordion>

      <p className="heading mt-20">Breadcrumbs</p>
      <Breadcrumbs className="breadcrumbs mt-6">
        <Breadcrumbs.Item className="breadcrumbs-item">
          <button className="btn btn-soft">Home</button>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item className="breadcrumbs-item">
          <button className="btn btn-soft">Articles</button>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item
          className="breadcrumbs-item"
          isLastItem>
          <button className="btn btn-fill">How to gain money?</button>
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs
        separator={<ChevronRightIcon className="size-5" />}
        className="breadcrumbs mt-3">
        <Breadcrumbs.Item className="breadcrumbs-item">
          <button className="btn btn-soft">Home</button>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item className="breadcrumbs-item">
          <button className="btn btn-soft">Articles</button>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item
          className="breadcrumbs-item"
          isLastItem>
          <button className="btn btn-fill">How to gain money?</button>
        </Breadcrumbs.Item>
      </Breadcrumbs>

      <p className="heading mt-20">Carousel</p>
      <Carousel className="carousel mt-6">
        <Carousel.LeftFade className="carousel-left-fade" />
        <Carousel.RightFade className="carousel-right-fade" />

        <Carousel.Container className="carousel-container gap-3 scroll-smooth">
          {Array.from({ length: 12 }).map((_, index) => (
            <article
              key={index}
              className="carousel-children card slidable">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
              doloremque error rem ex, necessitatibus dolore deleniti alias aperiam cum
              ipsum, suscipit possimus porro provident totam mollitia? Voluptate, eaque
              quas. Culpa.
            </article>
          ))}
        </Carousel.Container>

        <div className="f-center gap-3 mt-3">
          <Carousel.PrevBtn className="btn btn-outline btn-square">
            <ArrowLeftIcon className="btn-icon-size" />
          </Carousel.PrevBtn>
          <Carousel.NextBtn className="btn btn-outline btn-square">
            <ArrowRightIcon className="btn-icon-size" />
          </Carousel.NextBtn>
        </div>
      </Carousel>

      <p className="heading mt-20">Client only</p>
      <p className="mt-6">There is server</p>
      <ClientOnly>
        <p className="mt-3">There is client</p>
      </ClientOnly>

      <p className="heading mt-20">Clipboard</p>
      <Clipboard
        text="Kadoui-react"
        className="btn btn-soft btn-square mt-6"
        copiedChildren={<CopyCheckIcon className="btn-icon-size" />}>
        <CopyIcon className="btn-icon-size" />
      </Clipboard>

      <p className="heading mt-20">ContextMenu</p>
      <ContextMenu className="context-menu border-4 border-dashed border-foreground mt-6 h-[33vh]">
        <span className="absolute inset-center">Context menu!</span>

        <ContextMenu.Body className="context-menu-body">
          <AccessNavigation className="card card-menu card-y">
            <button className="btn btn-ghost">
              <TrashIcon className="compatible-icon" />
              <span>DELETE</span>
            </button>
            <button className="btn btn-ghost">
              <RefreshCwIcon className="compatible-icon" />
              <span>RELOAD</span>
            </button>
            <button className="btn btn-ghost">
              <FlagIcon className="compatible-icon" />
              <span>IGNORE IT</span>
            </button>
          </AccessNavigation>
        </ContextMenu.Body>
      </ContextMenu>

      <p className="heading mt-20">Drawer</p>
      <Drawer>
        <Drawer.Toggle className="btn btn-soft mt-6">Open left drawer</Drawer.Toggle>

        <Drawer.Portal className="drawer-portal">
          <Drawer.Body className="drawer-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero
            delectus eum qui laboriosam, dolore veritatis eligendi amet voluptatibus
            incidunt temporibus dolores fuga adipisci eius saepe quod aspernatur iure.
          </Drawer.Body>
        </Drawer.Portal>
      </Drawer>
      <Drawer>
        <Drawer.Toggle className="btn btn-soft mt-3">Open top drawer</Drawer.Toggle>

        <Drawer.Portal className="drawer-portal">
          <Drawer.Body
            className="drawer-body"
            position="top">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero
            delectus eum qui laboriosam, dolore veritatis eligendi amet voluptatibus
            incidunt temporibus dolores fuga adipisci eius saepe quod aspernatur iure.
          </Drawer.Body>
        </Drawer.Portal>
      </Drawer>
      <Drawer>
        <Drawer.Toggle className="btn btn-soft mt-3">Open right drawer</Drawer.Toggle>

        <Drawer.Portal className="drawer-portal">
          <Drawer.Body
            className="drawer-body"
            position="right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero
            delectus eum qui laboriosam, dolore veritatis eligendi amet voluptatibus
            incidunt temporibus dolores fuga adipisci eius saepe quod aspernatur iure.
          </Drawer.Body>
        </Drawer.Portal>
      </Drawer>
      <Drawer>
        <Drawer.Toggle className="btn btn-soft mt-3">Open bottom drawer</Drawer.Toggle>

        <Drawer.Portal className="drawer-portal">
          <Drawer.Body
            className="drawer-body"
            position="bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero
            delectus eum qui laboriosam, dolore veritatis eligendi amet voluptatibus
            incidunt temporibus dolores fuga adipisci eius saepe quod aspernatur iure.
          </Drawer.Body>
        </Drawer.Portal>
      </Drawer>

      <p className="heading mt-20">Modal</p>
      <Modal>
        <Modal.Toggle className="btn btn-soft mt-6">Open modal</Modal.Toggle>

        <Modal.Portal className="modal-portal">
          <Modal.Body className="modal-body">
            <Modal.Header className="modal-header font-bold justify-center">
              Say hello to modal
            </Modal.Header>
            <Modal.Content className="modal-content max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
              ratione repudiandae eveniet quisquam, vitae, nobis iure voluptas harum est
              incidunt odio? Dolorem quod numquam placeat sed beatae, natus cum porro!
            </Modal.Content>
          </Modal.Body>
        </Modal.Portal>
      </Modal>

      <p className="heading mt-20">OTP</p>
      <Otp className="otp mt-6">
        <Otp.Inputs
          length={6}
          className="input input-outline input-square"
          onLastChange={(otp) => alert(otp)}
        />

        <Otp.HiddenInput />
      </Otp>

      <p className="heading mt-20">Pagination</p>
      <p className="mt-6">With state:</p>
      <PaginationWithState pageLength={6}>
        <div className="pagination mt-3">
          <PaginationWithState.PrevBtn className="btn btn-soft btn-square">
            <ChevronLeftIcon className="btn-icon-size" />
          </PaginationWithState.PrevBtn>

          <PaginationWithState.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

          <PaginationWithState.NextBtn className="btn btn-soft btn-square">
            <ChevronRightIcon className="btn-icon-size" />
          </PaginationWithState.NextBtn>
        </div>
      </PaginationWithState>
      <p className="mt-6">With search params:</p>
      <PaginationWithSearchParams pageLength={6}>
        <div className="pagination mt-3">
          <PaginationWithSearchParams.PrevBtn className="btn btn-soft btn-square">
            <ChevronLeftIcon className="btn-icon-size" />
          </PaginationWithSearchParams.PrevBtn>

          <PaginationWithSearchParams.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

          <PaginationWithSearchParams.NextBtn className="btn btn-soft btn-square">
            <ChevronRightIcon className="btn-icon-size" />
          </PaginationWithSearchParams.NextBtn>
        </div>
      </PaginationWithSearchParams>

      <p className="heading mt-20">PasswordInput</p>
      <PasswordInput className="input input-outline mt-3">
        <PasswordInput.Field className="input-field" />
        <PasswordInput.Toggle
          className="btn btn-ghost btn-sm"
          visibleChildren={<EyeIcon className="btn-icon-size" />}>
          <EyeClosedIcon className="btn-icon-size" />
        </PasswordInput.Toggle>
      </PasswordInput>

      <p className="mt-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quasi
        mollitia veniam consequuntur dicta! Harum, eos consectetur iste rem minus omnis
        aut est officiis quos in quae nisi? Dignissimos deleniti dolorem consequuntur,
        itaque, possimus molestiae ex, quasi facilis similique commodi vitae perspiciatis
        beatae iure est ullam quos ab maiores ratione hic iste quis reiciendis accusantium
        reprehenderit. Aliquid delectus iusto voluptatibus voluptatum architecto velit
        modi distinctio nihil assumenda veniam? Ipsum possimus amet corporis quos sint
        corrupti enim temporibus deleniti similique. Id ut fuga doloribus. Consequatur
        quia fugiat libero obcaecati facilis? Asperiores aperiam facilis omnis eius rem
        aliquam nam? Nostrum earum dolorem, expedita quam repudiandae consequuntur, ipsam
        quas laudantium quaerat ex eaque molestiae labore. Autem quam aspernatur
        recusandae perferendis, explicabo reprehenderit officia molestias excepturi
        blanditiis placeat ratione architecto esse vitae labore quae possimus voluptates
        repudiandae. Explicabo cumque sunt aliquid eaque autem reiciendis praesentium
        reprehenderit ab commodi dolores ipsam nisi, accusantium adipisci animi eius fugit
        dolor necessitatibus totam nostrum in harum dignissimos inventore. Labore voluptas
        doloribus quibusdam praesentium? Assumenda obcaecati minus quod iusto dignissimos
        ipsam consequatur, totam dolorem maiores magnam molestias fugiat doloribus ea
        mollitia, numquam optio quisquam nobis voluptate quibusdam! Repellendus distinctio
        id autem rerum magnam neque voluptas sapiente consequatur? Velit sint nisi libero?
        Fugiat minima perspiciatis rem atque aspernatur quis vitae incidunt, temporibus
        qui est dolorum explicabo et. Sint atque rem suscipit fuga eum saepe. Officia,
        tempora minus. Corporis dolorum voluptatum dignissimos eveniet error sit
        exercitationem aliquid reprehenderit perspiciatis unde, deserunt recusandae nisi
        consequatur architecto saepe iusto totam dolorem ex odit at. Ipsa obcaecati quod
        odit explicabo nulla commodi nobis sapiente! Illum esse, nisi nihil voluptatibus
        amet accusantium explicabo est debitis, placeat beatae adipisci dolorum fugiat rem
        vel recusandae temporibus nemo! Quidem, labore. Fuga quae unde dolores animi,
        molestias voluptatum, eligendi aperiam corporis nulla autem dignissimos, itaque
        quis? Fugiat asperiores iusto quidem expedita eum modi laborum rerum sint
        obcaecati, provident natus ratione a alias ipsum architecto, sit ducimus nobis.
        Voluptas, velit nesciunt rem consequatur commodi, error architecto illo
        necessitatibus dolorum rerum officiis modi, vitae ea laboriosam. Commodi delectus
        quas ducimus, totam earum deleniti laboriosam pariatur enim provident quasi
        tempore impedit eveniet aspernatur ad quisquam. Illum, dicta omnis. Animi
        distinctio quod autem numquam laboriosam. Rerum enim accusamus voluptatibus
        corporis, nihil molestias in, exercitationem assumenda ea incidunt dolorem
        dignissimos excepturi iure quis doloremque et nesciunt aspernatur temporibus nobis
        minus eius cum natus pariatur sequi. Aliquam soluta dolorem ullam voluptatem
        praesentium sequi commodi distinctio, id porro ipsum possimus ratione fugit est
        rerum dolores cupiditate rem perspiciatis voluptatum asperiores libero modi
        eveniet doloribus. Enim repudiandae animi quos ea minima perferendis optio
        temporibus ad voluptates earum incidunt sit quam odio quisquam, ipsum doloribus
        quia blanditiis iste modi debitis nisi! Sit repellat recusandae, impedit
        repellendus itaque modi quae minus, odit optio eligendi ut voluptatum dicta
        tenetur et adipisci sapiente pariatur. Ab vero eos optio illum nam veritatis,
        saepe fugiat beatae sit placeat recusandae delectus veniam iusto, odit illo
        aliquid eveniet numquam excepturi eligendi repellat? Officia nihil ipsam ad ab,
        possimus doloribus, repudiandae consequuntur ipsum magnam provident beatae,
        quisquam accusamus? Magnam, ipsa quam mollitia atque similique, iure veniam non
        fugiat voluptatem porro quidem dolores asperiores. Quo, saepe eius fugiat deserunt
        accusantium optio reprehenderit voluptate nulla aliquid sequi cupiditate porro
        temporibus facilis dolor officia, qui deleniti? Similique necessitatibus numquam
        natus suscipit corrupti, quaerat ducimus tempore consequatur hic asperiores
        voluptatibus delectus voluptate nihil. Maiores sed aliquid laborum, tempore, qui
        ducimus quos, assumenda omnis facere dicta illo saepe cupiditate alias provident
        quaerat nemo! Fuga, porro assumenda enim, harum doloremque ullam autem nihil id,
        optio excepturi officiis dolorem? Consectetur nobis porro quidem veniam
        necessitatibus nemo iusto perspiciatis maiores. Perferendis cumque reiciendis
        incidunt eligendi distinctio voluptatibus soluta, cupiditate repudiandae
        consectetur asperiores, optio quos esse vel vitae dicta iure nam alias voluptatum
        repellat, porro consequatur nihil. Repellat ipsam laudantium natus adipisci nihil
        magni quibusdam odio sit delectus a neque beatae deserunt, sint at eum architecto
        cumque expedita! Tempore accusantium nostrum repellendus corporis, mollitia,
        nesciunt deserunt dolores at repellat aliquam illo neque nulla modi dignissimos
        sit placeat officiis impedit itaque quidem corrupti maxime quod. Accusamus, quae?
        Reiciendis maxime earum, sunt aliquid quia recusandae fugiat fugit officia odio
        obcaecati ipsa, provident est quasi cum deleniti, quam quae facilis? Error quam
        nobis, inventore atque sunt porro. Pariatur incidunt minima nesciunt nulla quos
        nam veniam debitis est consequatur aliquid ea quaerat quia beatae, cum eligendi
        consequuntur dignissimos voluptatum commodi molestias amet natus odio impedit eum
        asperiores. Incidunt, rerum quasi cumque unde nesciunt temporibus facere vitae
        molestias nulla et alias, ea voluptatem amet odio veniam id expedita nostrum
        voluptates eligendi, repudiandae architecto saepe laborum! Voluptatibus debitis
        maiores consequatur repellendus vel quis, necessitatibus velit dolor, ipsam, quae
        at laborum odio inventore sequi totam earum distinctio quaerat perferendis. Odit
        error accusantium blanditiis quia harum nulla in consectetur, maxime cumque
        officiis corporis labore, quas nostrum, voluptas similique et mollitia ad placeat!
        Voluptate cum nobis libero ab tempore id at, corporis ad? Eum cumque vero magnam?
        Possimus minus temporibus ducimus reprehenderit perferendis? At, doloribus in,
        sunt similique praesentium, cupiditate minima id necessitatibus dolor ratione eius
        et eveniet voluptates iusto sed? Animi accusantium eum cum consequuntur,
        dignissimos alias fugit repellendus, corrupti, quibusdam beatae similique
        praesentium vel recusandae reiciendis ut accusamus sunt quo pariatur nihil et
        dolorem incidunt aspernatur error illum? Iure sapiente dolore eum magnam cumque
        neque temporibus ipsam ducimus ex doloremque, perspiciatis et incidunt illum fugit
        quaerat facilis veritatis tempore aut quisquam exercitationem rem libero!
        Temporibus minus id dolorum, alias perferendis quis sint voluptates corrupti ullam
        commodi. Laborum saepe architecto cupiditate adipisci velit cumque neque fugit ut,
        fuga reprehenderit! Dolor dolorum est quisquam alias distinctio amet dolores, sit
        minima! Reiciendis sit tempora cumque dolore debitis iure dolorem fugit itaque
        officia ducimus, harum velit ipsum veritatis nam nesciunt quos odit quia, qui
        repudiandae nulla! Explicabo quis rem, quae perferendis ex odit ratione, minima
        autem dolorem magnam incidunt ipsum corporis numquam eos officiis alias temporibus
        quibusdam et dolore sunt. Molestias perferendis quidem delectus rerum eos quas?
        Eos fuga quam qui at nostrum reiciendis voluptatibus praesentium sit! Fugit vitae
        error ratione animi nobis repellat, aliquam suscipit.
      </p>
    </div>
  );
}

export default Page;
