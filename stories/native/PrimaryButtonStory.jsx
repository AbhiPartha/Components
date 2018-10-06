import React from 'react';
import DOCCreator, { Description, DocItem, Section, storiesOf } from '../../.storybook/doc-creator';

// Actual component
import PrimaryButton from '../../src/molecules/native/PrimaryButton'

const PrimaryButtonStory = () => (
  <DOCCreator title="Primary Button">
    <Description>Displays a button</Description>
    <Section title="Props">
      <DocItem
        name="color"
        typeInfo="?string"
        description="Colored button"
        example={{
          render: () => <PrimaryButton />
        }}
      />
    </Section>
  </DOCCreator>
);

storiesOf('NativeComponents', module).add('PrimaryButton', PrimaryButtonStory);