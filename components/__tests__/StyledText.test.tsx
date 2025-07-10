import { render } from "@testing-library/react-native";
import { MonoText } from "../StyledText";

jest.mock('expo-font');
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

it(`renders correctly`, () => {
  const { getByText } = render(<MonoText>Snapshot test!</MonoText>);
  expect(getByText("Snapshot test!")).toBeTruthy();
});
