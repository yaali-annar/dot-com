import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from 'react';

interface ColorsContextFields {
  hue: number;
  hueOffset: number;
  setHue: (newHue: number) => void
  setHueOffset: (newHueOffset: number) => void
}

type ColorProviderProps = {
  children: ReactElement
}

const ColorsContext = createContext<ColorsContextFields>({
  hue: 0,
  hueOffset: 120,
  setHue: (newHue) => console.log(newHue),
  setHueOffset: (newHueOffset) => console.log(newHueOffset),
});

const { Provider } = ColorsContext;

const ColorProvider = ({children}: ColorProviderProps) => {
  const [hue, setHue] = useState(0);
  const [hueOffset, setHueOffset] = useState(120);
  const value = { hue, hueOffset, setHue, setHueOffset};
  return <Provider value={value}>{children} </Provider>;
};

const useColors = (): ColorsContextFields => useContext(ColorsContext);

export { ColorProvider, useColors };
