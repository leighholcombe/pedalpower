import types from '@/public/data/types.json';
import colors from '@/public/data/colors.json';
import brands from '@/public/data/brands.json';

export default async function ParamTest(props: PageProps<any>) {
  const searchParams = await props.searchParams;
  const color = searchParams.color;
  const type = searchParams.type;
  const brand = searchParams.brand;

  let message;
  if (color !== null && color !== undefined) {
    colors.forEach((swatch) => {
      if(swatch.value == color) {
        message = "Filter is set to color " + swatch.name;
      }
    });
  } else if (type !== null && type !== undefined) {
    types.forEach((tag) => {
      if(tag.value == type) {
        message = "Filter is set to type " + tag.name;
      }
    });
  } else if (brand !== null && brand !== undefined) {
    brands.forEach((brandi) => {
      if(brandi.value == brand) {
        message = "Filter is set to brand " + brandi.name;
      }
    });
  } else {
    message = "No filter detected";
  }
  return (
    <div>{message}</div>
  )
}
