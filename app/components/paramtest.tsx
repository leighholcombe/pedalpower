import tags from '@/public/data/tags.json';
import colors from '@/public/data/colors.json';

export default async function ParamTest(props: PageProps<any>) {
  const searchParams = await props.searchParams;
  const color = searchParams.color;
  const cat = searchParams.cat;

  let message;
  if (color !== null && color !== undefined) {
    colors.forEach((swatch) => {
      if(swatch.value == color) {
        message = "Filter is set to color " + swatch.name;
      }
    });
  } else if (cat !== null && cat !== undefined) {
    tags.forEach((tag) => {
      if(tag.value == cat) {
        message = "Filter is set to category " + tag.name;
      }
    });
  } else {
    message = "No filter detected";
  }
  return (
    <div>{message}</div>
  )
}
