import React from 'react';
import DOCCreator, { Description, DocItem, Section, storiesOf } from '../../.storybook/doc-creator';

// Actual component
import CenteredActivityIndicator from '../../src/molecules/native/CenteredActivityIndicator'

const CenteredActivityIndicatorStory = () => (
  <DOCCreator title="ActivityIndicator">
    <Description>Displays a centered activity indicator</Description>
    <Section title="Props">
      <DocItem
        name="animating"
        typeInfo="?boolean = true"
        description="Whether to show the indicator or hide it."
        example={{
          render: () => <CenteredActivityIndicator />
        }}
      />

      <DocItem
        name="not animationg"
        typeInfo="?boolean = false"
        description="Whether to show the indicator or hide it."
        example={{
          render: () => <CenteredActivityIndicator animating={false}/>
        }}
      />
    </Section>
  </DOCCreator>
);

storiesOf('Native', module).add('CenteredActivityIndicator', CenteredActivityIndicatorStory);