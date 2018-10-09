import React from 'react';
import DOCCreator, { Description, DocItem, Section, storiesOf } from '../../.storybook/doc-creator';

// Actual component
import PrimaryButton from '../../src/molecules/web/Button'

const PrimaryButtonStory = () => (
  <DOCCreator title="Primary Button">
    <Description>Displays a web button</Description>
    <Section title="Props">
      <DocItem
        name="color"
        typeInfo="?string"
        description="Colored button"
        example={{
          render: () => <PrimaryButton> Click me! </PrimaryButton>
        }}
      />
    </Section>
  </DOCCreator>
);

storiesOf('Web', module).add('PrimaryButton', PrimaryButtonStory);