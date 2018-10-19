import React from 'react';
import DOCCreator, { Description, DocItem, Section, storiesOf } from '../../.storybook/doc-creator';

// Actual component
import SimpleButton from '../../src/molecules/web/SimpleButton'

const SimpleButtonStory = () => (
  <DOCCreator title="Primary Button">
    <Description>Displays a web button</Description>
    <Section title="Props">
      <DocItem
        name="color"
        typeInfo="?string"
        description="Colored button"
        example={{
          render: () => <SimpleButton text={"sign in"} />
        }}
      />
    </Section>
  </DOCCreator>
);

storiesOf('Web', module).add('PrimaryButton', SimpleButtonStory);