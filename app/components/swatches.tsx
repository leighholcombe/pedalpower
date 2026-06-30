import colors from '@/public/data/colors.json';
import Color from './colors';

export default async function Swatches(props: PageProps<any>) {
  // Check if colors is an array before mapping to avoid errors
  if (!Array.isArray(colors)) {
    return <p>No colors available.</p>;
  }
  const searchParams = await props.searchParams;
  const color = searchParams.color;

  return (
    <div>
      <h2 className="mb-2">Filter by color:</h2>
      <div className="flex gap-3 items-center flex-wrap">
        {colors.map((swatch) => {
          if(swatch.value == color) {
            return (
              <Color
                key={swatch.value}
                colorParam={swatch.value}
                selected={true}
              />
            )
          } else {
            return (
              <Color
                key={swatch.value}
                colorParam={swatch.value}
                selected={false}
              />
            )
          }
        })}
      </div>
    </div>
  );
};