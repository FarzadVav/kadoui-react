# Kadoui-react

Primitive components for `React` powered by `Kadoui-css` styles.

---

### Components

You can just import them and use easily.

### AccessNavigation

For add arrow-key nagivations to your UIs.

```tsx
<AccessNavigation
  direction="x"
  className="join mt-6">
  <button className="btn btn-soft">One</button>
  <button className="btn btn-soft">Two</button>
  <button className="btn btn-soft">Three</button>
  <button className="btn btn-soft">Four</button>
</AccessNavigation>
```

### Accordion

```tsx
<Accordion>
  <Accordion.Toggle className="btn btn-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
    <span>Open accordion</span>
    <ChevronDownIcon className="transition-transform btn-icon-size group-data-[state=true]:-scale-y-100" />
  </Accordion.Toggle>
  <Accordion.Body>
    <p className="p-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus unde,
      repellendus dolores, fuga nam commodi sapiente omnis voluptatum error earum culpa
      asperiores eaque ea enim possimus vero esse!
    </p>
  </Accordion.Body>
</Accordion>
```

### Breadcrumbs

```tsx
<Breadcrumbs className="breadcrumbs">
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
```

or

```tsx
<Breadcrumbs className="breadcrumbs">
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
```

### Carousel

```tsx
<Carousel className="carousel">
  <Carousel.LeftFade className="carousel-left-fade" />
  <Carousel.RightFade className="carousel-right-fade" />

  <Carousel.Container className="carousel-container gap-3 scroll-smooth">
    {Array.from({ length: 12 }).map((_, index) => (
      <article
        key={index}
        className="carousel-children card slidable">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque
        error rem ex, necessitatibus dolore deleniti alias aperiam cum ipsum, suscipit
        possimus porro provident totam mollitia? Voluptate, eaque quas. Culpa.
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
```

### ClientOnly

```tsx
<p>There is server</p>
<ClientOnly>
  <p>There is client</p>
</ClientOnly>
```

### Clipboard

```tsx
<Clipboard
  text="Kadoui-react"
  className="btn btn-soft btn-square"
  copiedChildren={<CopyCheckIcon className="btn-icon-size" />}>
  <CopyIcon className="btn-icon-size" />
</Clipboard>
```
